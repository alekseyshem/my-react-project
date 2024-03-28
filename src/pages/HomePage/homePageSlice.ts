import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Post from "../../dto/Post";

interface InitialState {
  posts: Array<Post> | undefined;
  totalPosts: number | undefined;
  isLoading: boolean;
  pageSize: number;
  page: number | undefined;
  isOpenDeletePostModal: boolean;
  isOpenAddPostModal: boolean;
  isDeleteLoading: boolean;
  isAddPostLoading: boolean;
  deletePostId: string | undefined;
}

const initialState: InitialState = {
  posts: undefined,
  totalPosts: undefined,
  isLoading: true,
  pageSize: 2,
  page: undefined,
  isOpenDeletePostModal: false,
  isOpenAddPostModal: false,
  isDeleteLoading: false,
  isAddPostLoading: false,
  deletePostId: undefined,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    openDeleteModal(state, action) {
      state.isOpenDeletePostModal = true;
      state.deletePostId = action.payload;
    },
    closeDeleteModal(state) {
      if (!state.isDeleteLoading) {
        state.isOpenDeletePostModal = false;
      }
    },
    deletePostSuccess: (state) => {
      state.isOpenDeletePostModal = false;
      state.isDeleteLoading = false;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deletePost(state, _action: PayloadAction<string>) {
      state.isDeleteLoading = true;
    },
    openAddModal: (state) => {
      state.isOpenAddPostModal = true;
    },

    closeAddModal: (state) => {
      if (!state.isAddPostLoading) {
        state.isOpenAddPostModal = false;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addPost: (state, _action: PayloadAction<{title: string, description: string}>) => {
      state.isAddPostLoading = true;
    },

    addPostSuccess: (state) => {
      state.isOpenAddPostModal = false;
      state.isAddPostLoading = false;
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
  addPost,
  loadPostsSuccess,
  openDeleteModal,
  closeDeleteModal,
  openAddModal,
  closeAddModal,
  deletePostSuccess,
  addPostSuccess,
} = postsSlice.actions;
export default postsSlice.reducer;
