import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Users/UsersSlice";
import FilterReducer from "./Filter/FilterSlice";

const rootReducer = combineReducers({
  UsersReducer,
  FilterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
