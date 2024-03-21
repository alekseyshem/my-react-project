import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Post from "../../dto/Post";

interface InitialState {
  posts: Array<Post> | undefined;
  totalPosts: number | undefined;
  isLoading: boolean;
  pageSize: number;
  page: number | undefined;
  isOpenDeletePostModal: boolean;
  isDeleteLoading: boolean;
  deletePostId: number | undefined;
}

const initialState: InitialState = {
  posts: undefined,
  totalPosts: undefined,
  isLoading: true,
  pageSize: 2,
  page: undefined,
  isOpenDeletePostModal: false,
  isDeleteLoading: false,
  deletePostId: undefined
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    openModal(state, action) {
      state.isOpenDeletePostModal = true;
      state.deletePostId = action.payload
    },
    closeModal(state) {
      state.isOpenDeletePostModal = false;
      state.isDeleteLoading = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deletePost(state, action: PayloadAction<number>) {
      state.isDeleteLoading = true;
    },
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

export const {
  deletePost,
  loadPosts,
  loadPostsSuccess,
  openModal,
  closeModal,
} = postsSlice.actions;
export default postsSlice.reducer;
