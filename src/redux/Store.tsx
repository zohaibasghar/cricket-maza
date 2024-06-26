import { configureStore } from "@reduxjs/toolkit";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import React from "react";
import authReducer from "./authSlice";
import errorsReducer from "./errorSlice";
import { matchReducer } from "./matchSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorsReducer,
    matches: matchReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type StoreProviderType = {
  children: React.ReactElement;
};

const StoreProvider = ({ children }: StoreProviderType): React.ReactElement => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
