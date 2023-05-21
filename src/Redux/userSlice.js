import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUpdateUsers } from './option';

const UserSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },
  reducers: {
    users: (state, action) => [...state, action.payload],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUpdateUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.error = null;
      })
      .addCase(fetchUpdateUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { users } = UserSlice.actions;
export const usersReducer = UserSlice.reducer;
