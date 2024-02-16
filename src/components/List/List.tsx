import Post from "../../dto/Post";
import ListItem from "../ListItem/ListItem";
import "./List.css";
import { memo } from "react";

interface ListProps {
  posts: Array<Post>;
  onDeletePost: (id: number) => void;
}


const List = memo(({ posts, onDeletePost }: ListProps) => {
  return posts.length ? (
    <ul className="list">
      {posts.map((item) => (
        <ListItem post={item} key={item.id} onDeletePost={onDeletePost} />
      ))}
    </ul>
  ) : (
    <p>нет записей</p>
  );
});

export default List;
