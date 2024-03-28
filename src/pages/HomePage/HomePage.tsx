import List from "../../components/List/List";
import "./HomePage.css";
import { useLoadPosts } from "../../hooks/useLoadPosts";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { closeAddModal, closeDeleteModal, openAddModal, openDeleteModal } from "./homePageSlice";
import { useCallback } from "react";
import DeletePostModal from "../../components/DeletePostModal/DeletePostModal";
import AddPostModal from "../../components/AddPostModal/AddPostModal";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const { posts, totalPosts, isLoading, pageSize, currentPage } = useLoadPosts();
  const dispatch = useDispatch();

  const onOpenDeletePost = (id: string) => {
    dispatch(openDeleteModal(id));
  };

  const onCloseDeleteModal = useCallback(() => {
    dispatch(closeDeleteModal());
  }, [dispatch]);

  const onOpenAddModal = useCallback(() => {
    dispatch(openAddModal());
  }, [dispatch]);

  const onCloseAddModal = useCallback(() => {
    dispatch(closeAddModal());
  }, [dispatch]);

  return (
    <div className="homepage">
      {isLoading ? (
        <div>абаждити ПЛЕС</div>
      ) : (
        posts && (
          <div>
            {currentPage && !!totalPosts && (
              <div className="homepage__header">
                <Pagination total={totalPosts} pageSize={pageSize} currentPage={currentPage} />
                <div>
                  <Button title="create post" type="blue" onClick={onOpenAddModal} />
                </div>
              </div>
            )}
            {posts.length ? (
              <List posts={posts} onDeletePost={onOpenDeletePost} />
            ) : (
              <div>Нет записей</div>
            )}
          </div>
        )
      )}
      <AddPostModal onCloseModal={onCloseAddModal} />
      <DeletePostModal onCloseModal={onCloseDeleteModal} />
    </div>
  );
};

export default HomePage;
