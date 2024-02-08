import { useCallback, useState } from "react";
import List from "../../components/List/List";
import "./HomePage.css";

const HomePage = () => {
  const [posts, setPosts] = useState([
    {
      title: "name",
      description: "description",
      id: 1,
      date: new Date().toLocaleDateString("ru-RU"),
      lastChange: new Date().toLocaleDateString("ru-RU"),
    },
    {
      title: "name",
      description: "description",
      id: 2,
      date: new Date().toLocaleDateString("ru-RU"),
      lastChange: new Date().toLocaleDateString("ru-RU"),
    },
  ]);

  const onDeletePost = useCallback(
    (id: number) => {
      setPosts(posts.filter((item) => item.id !== id));
    },
    [posts]
  );

  return (
    <div className="homepage">
      HomePage
      <List posts={posts} onDeletePost={onDeletePost} />
    </div>
  );
};

export default HomePage;
