import Post from "../../dto/Post";
import ListItem from "../ListItem/ListItem";
import "./List.css";
import { memo } from "react";

interface ListProps {
  posts: Array<Post>;
  onDeletePost: (id: string) => void;
}


const List = memo(({ posts, onDeletePost }: ListProps) => {
  return posts.length ? (
    <ul className="list">
      {posts.map((post) => (
        <ListItem post={post} key={post.id} onDeletePost={onDeletePost} />
      ))}
    </ul>
  ) : (
    <p>нет записей</p>
  );
});

export default List;
