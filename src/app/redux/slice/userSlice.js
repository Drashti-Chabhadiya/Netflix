import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  loginUserByIdAPI,
  loginUserGetAPI,
  loginUserPostAPI,
  logOutAPI,
  updateUserProfileAPI,
} from '../api/api';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(postUserData.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.error = null;
      })
      .addCase(postUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(postUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(logOutUser.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.userData = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const fetchUserData = createAsyncThunk(
  'user/loginUserGetAPI',
  async () => {
    const response = await loginUserGetAPI();
    return response.data;
  }
);

export const fetchUserById = createAsyncThunk(
  'user/loginUserByIdAPI',
  async (userId) => {
    const response = await loginUserByIdAPI(userId);
    return response.data;
  }
);

export const postUserData = createAsyncThunk(
  'user/loginUserPostAPI',
  async (payload) => {
    const response = await loginUserPostAPI(payload);
    return response.data;
  }
);

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfileAPI',
  async (payload) => {
    const response = await updateUserProfileAPI(payload);
    return response.data;
  }
);

export const logOutUser = createAsyncThunk('user/logOutAPI', async () => {
  const response = await logOutAPI();
  return response.data;
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
