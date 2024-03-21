import { memo } from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  type?: "default" | "blue" | "red" | "disabled";
  isLoading?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = memo(({ title, type = "default", isLoading, onClick }: ButtonProps) => {
  const loadingButton = isLoading ? `button--loading ` : "";
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
    <button className={`button ` + loadingButton + className} onClick={onClick}>
      {title}
    </button>
  );
});

export default Button;
