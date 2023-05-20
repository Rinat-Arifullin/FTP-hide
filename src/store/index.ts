import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gameApi } from "service/game/service";
import { likedGameApi } from "service/likes/service";
import notificationReducer from "store/notifications/slice";

const rootReducer = combineReducers({
  [gameApi.reducerPath]: gameApi.reducer,
  [likedGameApi.reducerPath]: likedGameApi.reducer,
  notification: notificationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      gameApi.middleware,
      likedGameApi.middleware,
    ],
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
