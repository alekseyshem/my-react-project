import {
  configureStore,
  createImmutableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./pages/HomePage/homePageSlice";
import homeSaga from "./pages/HomePage/homeSaga";


export const sagaMiddleware = createSagaMiddleware();
const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware();

export const store =  configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware, immutableInvariantMiddleware),
});

sagaMiddleware.run(homeSaga);

export type RootState = ReturnType<typeof store.getState>


