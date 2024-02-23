import { call, fork, put, take } from "redux-saga/effects";
import { loadPostsSuccess } from "./homePageSlice";
import { loadPosts } from "./homePageSlice";
import { loadPosts as loadPostsApi } from "../../api";
import Post from "../../dto/Post";

function* loadPostsSaga() {
  while (true) {
    yield take(loadPosts.type);
    const posts: Array<Post> = yield call(loadPostsApi);
    yield put(loadPostsSuccess(posts));
  }
}

export default function* homeSaga() {
  yield fork(loadPostsSaga);
}
