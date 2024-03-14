import { createAsyncThunk } from '@reduxjs/toolkit';
// import setToken from '../../utils/setToken';

export const registerThunk = createAsyncThunk();
export const loginThunk = createAsyncThunk();
export const updateUserThunk = createAsyncThunk();
export const getCurrentThunk = createAsyncThunk();
export const logoutThunk = createAsyncThunk();
