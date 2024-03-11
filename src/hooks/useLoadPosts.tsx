import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../pages/HomePage/homePageSlice";
import {
  makeSelectPosts,
  makeSelectIsLoading,
  makeSelectTotalPosts,
  makeSelectPageSize,
  makeSelectPage,
} from "../pages/HomePage/selectors";
import { useSearchParams } from "react-router-dom";

const useLoadPosts = () => {
  const posts = useSelector(makeSelectPosts);
  const totalPosts = useSelector(makeSelectTotalPosts);
  const isLoading = useSelector(makeSelectIsLoading);
  const pageSize = useSelector(makeSelectPageSize);
  const currentPage = useSelector(makeSelectPage);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const dispatch = useDispatch();

  // const showSortedItems = (page: number) => {
  //   dispatch(loadPosts({ pageSize: 2, page }));
  // };
  // useEffect(() => {
  //   dispatch(loadPosts({ pageSize: 2, page: 1 }));
  // }, [dispatch]);

  useEffect(() => {
    if (page) {
      dispatch(loadPosts({ pageSize, page: +page }));
    } else {
      dispatch(loadPosts({ pageSize, page: 1 }));
    }
  }, [dispatch, pageSize, page]);

  // useEffect(() => {
  //   if (page <= totalPages ) {
  //     dispatch(loadPosts({ pageSize, page: +page }));
  //   } else {
  //     dispatch(loadPosts({ pageSize, page: 1 }));
  //     navigate("/");
  //   }
  // }, [dispatch, pageSize, page]);

  return { posts, totalPosts, isLoading, pageSize, currentPage };
};

export { useLoadPosts };
