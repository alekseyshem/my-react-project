import ListItem from "../ListItem/ListItem";
import "./List.css";
import { memo } from "react";

interface ListProps {
  posts: Array<TodoPost>;
  onDeletePost: (id: number) => void;
}

export interface TodoPost {
  title: string;
  description: string;
  id: number;
  date: string;
  lastChange: string;
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
