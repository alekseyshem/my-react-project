import { memo } from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  type?: "default" |"blue" | "red";
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = memo(({ title, type = "default", onClick }: ButtonProps) => {
  let className;
  switch (type) {
    case "blue":
      className = "button--blue";
      break;
    case "red":
      className = "button--red";
      break;
    default:
      className = "button--default";
  }

  return (
    <button className={`button ` + className} onClick={onClick}>
      {title}
    </button>
  );
});

export default Button;
