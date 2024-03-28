import { call, fork, put, select, take, takeEvery } from "redux-saga/effects";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess } from "./homePageSlice";
import { loadPosts } from "./homePageSlice";
import { addPostApi, deletePostApi, loadPostsApi } from "../../api";
import Post from "../../dto/Post";
import { history } from "../../main";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { makeSelectPage, makeSelectPageSize, makeSelectPosts } from "./selectors";

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

function* deletePostSaga(action: ReturnType<typeof deletePost>) {
  const page: number = yield select(makeSelectPage);
  const pageSize: number = yield select(makeSelectPageSize);
  const posts: Array<Post> = yield select(makeSelectPosts);

  yield call(deletePostApi, action.payload);
  yield put(deletePostSuccess())
  yield put(loadPosts({ pageSize, page: posts.length != 1 ? page : 1 }));
}

function* addPostSaga(action: ReturnType<typeof addPost>) {
  const page: number = yield select(makeSelectPage);
  const pageSize: number = yield select(makeSelectPageSize);

  yield call(addPostApi, action.payload)
  yield put(addPostSuccess())
  yield put(loadPosts({ pageSize, page}));
}

export default function* homeSaga() {
  yield fork(loadPostsSaga);
  yield takeEvery(deletePost.type, deletePostSaga);
  yield takeEvery(addPost.type, addPostSaga)
}
