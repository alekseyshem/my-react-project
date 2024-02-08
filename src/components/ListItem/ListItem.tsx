import { Link } from "react-router-dom";
import { TodoPost } from "../List/List";
import "./ListItem.css";
import Button from "../Button/Button";
import { memo, useCallback } from "react";

interface ListItemProps {
  post: TodoPost;
  onDeletePost: (id: number) => void;
}

const ListItem = memo(({ post, onDeletePost }: ListItemProps) => {

  return (
    <li className="list-item">
      <Link to={`/task/${post.id}`} className="list-item__content">
        <div className="title">{post.title}</div>
        <div className="date">добавлено: {post.date}</div>
        <div className="date">изменено: {post.lastChange}</div>
          <Button
            title="delete" 
            type="red"
            onClick={useCallback((e) => {
              e.preventDefault()
              onDeletePost(post.id);
            }, [onDeletePost, post.id])}
          />
      </Link>
    </li>
  );
});

export default ListItem;
