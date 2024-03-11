import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Post from "../../dto/Post";

interface InitialState {
  posts: Array<Post> | undefined;
  totalPosts: number | undefined;
  isLoading: boolean;
  pageSize: number;
  page: number | undefined;
}

const initialState: InitialState = {
  posts: undefined,
  totalPosts: undefined,
  isLoading: true,
  pageSize: 3,
  page: undefined,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    delPost() {},
    loadPosts: (state, action: PayloadAction<{ pageSize: number; page: number }>) => {
      state.isLoading = true;
      state.pageSize = action.payload.pageSize;
      state.page = action.payload.page;
    },
    loadPostsSuccess: (state, action) => {
      state.posts = action.payload.posts;
      state.totalPosts = action.payload.totalPosts;
      state.isLoading = false;
    },
  },
});

export const { delPost, loadPosts, loadPostsSuccess } = postsSlice.actions;
export default postsSlice.reducer;
