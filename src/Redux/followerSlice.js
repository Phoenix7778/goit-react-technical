import { createSlice } from '@reduxjs/toolkit';

const InitialState = [];
const followerSlice = createSlice({
  name: 'followerOf',
  initialState: InitialState,
  reducers: {
    addFollowId: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    excludeFollowId: {
      reducer(state, action) {
        const index = state.indexOf(action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  },
});

export const { addFollowId, excludeFollowId } = followerSlice.actions;
export const followerReducer = followerSlice.reducer;
