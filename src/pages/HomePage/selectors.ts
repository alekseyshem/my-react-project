import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectPosts = (state: RootState) => state.posts;

export const draftSafePostsSelector = createDraftSafeSelector(
  selectPosts,
  (state) => state.posts
);
export const draftSafeIsLoadingSelector = createDraftSafeSelector(
  selectPosts,
  (state) => state.isLoading
);
