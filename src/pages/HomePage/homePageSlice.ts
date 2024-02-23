import { createSlice } from "@reduxjs/toolkit";
import Post from "../../dto/Post";

interface InitialState {
  posts: Array<Post> | undefined;
  isLoading: boolean;
}

const initialState: InitialState = {
  posts: undefined,
  isLoading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    delPost() {},
    loadPosts: (state) => {
      state.isLoading = true;
    },
    loadPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
  },
});

export const { delPost, loadPosts, loadPostsSuccess } = postsSlice.actions;
export default postsSlice.reducer;
