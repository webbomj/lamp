import { combineReducers, configureStore } from "@reduxjs/toolkit";

import lampReducer from "../reducers/lampSlice";

const rootReducer = combineReducers({
  lampReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
