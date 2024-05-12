import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { spotifyCoreApi } from './services/spotify';

export const store = configureStore({
  reducer: {
    [spotifyCoreApi.reducerPath]: spotifyCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(spotifyCoreApi.middleware),
});

//redux toolkit code check offcial documentation