import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './User/UserSlices';
import { waterReducer } from './Water/WaterSlices';
import { globalReducer } from './global/GlobalSlice.js';

const persistUserConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persistedUser = persistReducer(persistUserConfig, userReducer);

const persistGlobalConfig = {
  key: 'global',
  storage,
  whitelist: ['language', 'theme']
};

const persistedGlobal = persistReducer(persistGlobalConfig, globalReducer);

const store = configureStore({
  reducer: {
    user: persistedUser,
    water: waterReducer,
    global: persistedGlobal,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);

export default store;
