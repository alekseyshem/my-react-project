import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../pages/HomePage/homePageSlice";
import {
  draftSafePostsSelector,
  draftSafeIsLoadingSelector,
} from "../pages/HomePage/selectors";

const useLoadPosts = () => {
  const posts = useSelector(draftSafePostsSelector);
  const isLoading = useSelector(draftSafeIsLoadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return { posts, isLoading };
};

export { useLoadPosts };
