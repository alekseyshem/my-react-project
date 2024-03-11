import { call, fork, put, take } from "redux-saga/effects";
import { loadPostsSuccess } from "./homePageSlice";
import { loadPosts } from "./homePageSlice";
import { loadPostsApi } from "../../api";
import Post from "../../dto/Post";
import { history } from "../../main";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

function* loadPostsSaga() {
  while (true) {
    const { payload }: ReturnType<ActionCreatorWithPayload<{ pageSize: number; page: number }>> =
      yield take(loadPosts.type); // реагирует на диспатч лоадпостс
    const { page, pageSize } = payload; // action.payload.page action.payload.pageSize
    try {
      const { posts, totalPosts }: { posts: Array<Post>; totalPosts: number } = yield call(
        loadPostsApi,
        pageSize,
        page
      ); // call == await
      yield put(loadPostsSuccess({ posts, totalPosts })); // put == dispatch
    } catch {
      history.push("/");
    }
  }
}

export default function* homeSaga() {
  yield fork(loadPostsSaga);
}
