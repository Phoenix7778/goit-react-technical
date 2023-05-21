import styled from 'styled-components';

export const UserCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: calc(380px * 3 + 20px * 2);
  margin: 20px auto;
`;

export const UserBox = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.div`
  width: 76px;
  height: 22px;
  opacity: 0.3;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Picture = styled.div`
  width: 308px;
  height: 168px;
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  position: absolute;
  top: 214px;
`;

export const AvatarBox = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
  border-radius: 85.9232px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tweets = styled.p`
  margin: 0;
  position: absolute;
  width: 380px;
  height: 24px;
  top: 284px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin: 0;
  position: absolute;
  width: 380px;
  height: 24px;
  top: 324px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const BtnFollow = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;
  background: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    opacity: 0.8;
  }
`;

export const TextBtn = styled.p`
  height: 22px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  flex: none;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const BtnLoadMore = styled.button`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  cursor: pointer;
  &:hover {
    background-color: #5cd3a8;
  }
`;
