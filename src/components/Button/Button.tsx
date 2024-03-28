import { memo } from "react";
import "./Button.css";
import classNames from "classnames";

interface ButtonProps {
  title: string;
  type?: "default" | "blue" | "red";
  isLoading?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = memo(({ title, type = "default", isLoading, onClick }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(!isLoading) {
      onClick(e)
    }
  }
  return (
    <button
      className={classNames("button", {
        "button--loading": isLoading,
        "button--blue": type === "blue",
        "button--red": type === "red",
        "button--default": type === "default",
      })}
      onClick={handleClick}
    >
      {title}
    </button>
  );
});

export default Button;
