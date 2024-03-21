import List from "../../components/List/List";
import "./HomePage.css";
import { useLoadPosts } from "../../hooks/useLoadPosts";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "./homePageSlice";
import { useCallback} from "react";
import DeletePostModal from "../../components/DeletePostModal/DeletePostModal";

const HomePage = () => {
  const { posts, totalPosts, isLoading, pageSize, currentPage } = useLoadPosts();
  const dispatch = useDispatch();

  const onDeletePost = (id: number) => {
    dispatch(openModal(id));
  };

  const onCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <div className="homepage">
      {isLoading ? (
        <div>абаждити ПЛЕС</div>
      ) : (
        posts && (
          <div>
            {currentPage && !!totalPosts && (
              <Pagination total={totalPosts} pageSize={pageSize} currentPage={currentPage} />
            )}
            {posts.length ? (
              <List posts={posts} onDeletePost={onDeletePost} />
            ) : (
              <div>Нет записей</div>
            )}
          </div>
        )
      )}
      <DeletePostModal onCloseModal={onCloseModal} />
    </div>
  );
};

export default HomePage;

// () => {}
// () => ()
// asdf => asdf + 1

// const f = (arg) => {return 1}
// const f = () => 1
// const f = () => {return {}}
// const f =() => ({})
// const f = () => {} //без ретурна
