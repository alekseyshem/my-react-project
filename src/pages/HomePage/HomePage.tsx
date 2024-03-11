import List from "../../components/List/List";
import "./HomePage.css";
import { useLoadPosts } from "../../hooks/useLoadPosts";
import Pagination from "../../components/Pagination/Pagination";

const HomePage = () => {
  const { posts, totalPosts, isLoading, pageSize, currentPage } = useLoadPosts();
  const onDeletePost = () => {};

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
    </div>
  );
};

export default HomePage;
