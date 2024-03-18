import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, setToken } from '../../configApi/setToken';
import { api } from '../../configApi/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('users/register', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('users/login', credentials);
      setToken(response.data.token);

      return response.data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  'user/update',
  async (newUserData, ThunkAPI) => {
    try {
      const { data } = await api.patch(`users/update`, newUserData);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.user.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkAPI.rejectWithValue('No token!');
    }
    try {
      const response = await api.get('users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('users/logout');
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWaterRateThunk = createAsyncThunk(
  'users/water-rate',
  async (newWaterRate, thunkAPI) => {
    try {
      const { data } = await api.patch('users/water-rate', newWaterRate);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

