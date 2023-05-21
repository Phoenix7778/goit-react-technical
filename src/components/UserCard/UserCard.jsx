import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { fetchUsers } from 'Redux/option';
import { updateUsers } from 'api/Api';
import logo from '../../images/Logo.png';
import pic from '../../images/picture.png';
import {
  AvatarBox,
  BtnContainer,
  BtnFollow,
  BtnLoadMore,
  Followers,
  Line,
  Logo,
  Picture,
  TextBtn,
  Tweets,
  UserBox,
  UserCardList,
} from './UserCard.styled';

export const UserCard = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [followingStatus, setFollowingStatus] = useState({});
  const [followingUsers, setFollowingUsers] = useState([]);
  const selectedState = useState('all');

  const onloadMore = () => {
    setCurrentIndex(prevIndex => prevIndex + 3);
  };

  useEffect(() => {
    dispatch(fetchUsers()).then(response => {
      const fetchedUsers = response.payload;
      setUsers(fetchedUsers);
    });
  }, [dispatch]);

  useEffect(() => {
    const storedStatus = {};
    users.forEach(user => {
      const storedFollowingStatus = localStorage.getItem(
        `followingStatus_${user.id}`
      );
      if (storedFollowingStatus !== null) {
        storedStatus[user.id] = storedFollowingStatus === 'true';
      }
    });
    setFollowingStatus(storedStatus);
  }, [users]);

  const onClick = useCallback(
    async (event, userId, following) => {
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          const updatedFollowers = following
            ? user.followers - 1
            : user.followers + 1;
          updateUsers(user.id, updatedFollowers)
            .then(response => {
              setUsers(prevUsers => {
                return prevUsers.map(prevUser => {
                  if (prevUser.id === userId) {
                    return {
                      ...prevUser,
                      following: !prevUser.following,
                      followers: updatedFollowers,
                    };
                  }
                  return prevUser;
                });
              });
              setFollowingStatus(prevStatus => ({
                ...prevStatus,
                [userId]: !prevStatus[userId],
              }));
              localStorage.setItem(
                `followingStatus_${userId}`,
                (!following).toString()
              );
            })
            .catch(error => {
              Notify.failure('Error', {
                position: 'center-top',
                distance: '80px',
                timeout: 2000,
              });
              console.error('Error:', error);
            });
        }
        return user;
      });
      setUsers(updatedUsers);
    },
    [users]
  );

  useEffect(() => {
    let followingUsers = users;
    const endIndex = currentIndex + 3;
    if (selectedState === 'follow') {
      followingUsers = users.filter(user => !followingStatus[user.id]);
    } else if (selectedState === 'followings') {
      followingUsers = users.filter(user => followingStatus[user.id]);
    }
    setFollowingUsers(followingUsers);
    setDisplayedUsers(followingUsers.slice(0, endIndex));
    setHasMore(endIndex < followingUsers.length);
  }, [selectedState, users, followingStatus, currentIndex]);

  useEffect(() => {}, [currentIndex, followingUsers]);

  return (
    <>
      <div
        style={{
          paddingBottom: '20px',
        }}
      >
        <UserCardList>
          {displayedUsers.map(user => (
            <UserBox key={user.id}>
              <Logo>
                <img src={`${logo}`} alt="logo" />
              </Logo>
              <Picture>
                <img src={`${pic}`} alt="card_picture" />
              </Picture>
              <Line></Line>
              <AvatarBox>
                <img
                  src={user.avatar}
                  alt="user_photo"
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                  }}
                />
              </AvatarBox>
              <Tweets>{user.tweets} tweets</Tweets>
              <Followers>
                {user.followers.toLocaleString('en-US')} followers
              </Followers>
              <BtnFollow
                following={followingStatus[user.id]}
                onClick={event =>
                  onClick(event, user.id, followingStatus[user.id])
                }
              >
                <TextBtn>
                  {followingStatus[user.id] ? 'Following' : 'Follow'}
                </TextBtn>
              </BtnFollow>
              <img src="../../images/picture.png" alt="" />
            </UserBox>
          ))}
        </UserCardList>
        <BtnContainer>
          {hasMore && <BtnLoadMore onClick={onloadMore}>Load More</BtnLoadMore>}
        </BtnContainer>
      </div>
    </>
  );
};
