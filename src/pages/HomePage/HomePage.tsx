import List from "../../components/List/List";
import "./HomePage.css";
import { useLoadPosts } from "../../hooks/useLoadPosts";

const HomePage = () => {
  const { posts, isLoading} = useLoadPosts();
  const onDeletePost = () => {};
  // const onDeletePost = useCallback(
  //   (id: number) => {
  //     if (posts) {
  //       setPosts(posts.filter((item) => item.id !== id));
  //     }
  //   },
  //   [posts, setPosts]
  // );

  return (
    <div className="homepage">
      {isLoading}
      HomePage
      {posts ? (
        <List posts={posts} onDeletePost={onDeletePost} />
      ) : (
        <div>1234</div>
      )}
    </div>
  );
};

export default HomePage;
