import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, updateUsers } from 'api/Api';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await getUsers();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUpdateUsers = createAsyncThunk(
  'users/fetchUpdateUsers',
  async (data, thunkAPI) => {
    try {
      const response = await updateUsers(data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
