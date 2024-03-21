import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectPosts = (state: RootState) => state.posts;

export const makeSelectPosts = createDraftSafeSelector(selectPosts, (state) => state.posts);
export const makeSelectIsLoading = createDraftSafeSelector(selectPosts, (state) => state.isLoading);
export const makeSelectTotalPosts = createDraftSafeSelector(selectPosts, (state) => state.totalPosts);
export const makeSelectPageSize = createDraftSafeSelector(selectPosts, (state) => state.pageSize);
export const makeSelectPage = createDraftSafeSelector(selectPosts, (state) => state.page);
export const makeSelectIsOpenDeletePostModal = createDraftSafeSelector(selectPosts, (state) => state.isOpenDeletePostModal);
export const makeSelectIsDeleteLoading = createDraftSafeSelector(selectPosts, (state) => state.isDeleteLoading);
export const makeSelectDeletePostId = createDraftSafeSelector(selectPosts, (state) => state.deletePostId);
