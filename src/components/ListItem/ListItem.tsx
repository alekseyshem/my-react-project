import { Link } from "react-router-dom";
import "./ListItem.css";
import Button from "../Button/Button";
import { memo, useCallback } from "react";
import Post from "../../dto/Post";

interface ListItemProps {
  post: Post;
  onDeletePost: (id: number) => void;
}

const ListItem = memo(({ post, onDeletePost }: ListItemProps) => {
  const onDelete = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDeletePost(post.id);
  },
  [onDeletePost, post.id])
  return (
    <li className="list-item">
      <Link to={`/task/${post.id}`} className="list-item__content">
        <div className="title">{post.title}</div>
        <div className="date">добавлено: {post.createdAt.format("D MMMM YYYY")}</div>
        <div className="date">изменено: {post.updatedAt.format("D MMMM YYYY")}</div>
        <Button
          title="delete"
          type="red"
          onClick={onDelete}
        />
      </Link>
    </li>
  );
});

export default ListItem;
