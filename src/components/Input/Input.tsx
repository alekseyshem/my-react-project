import { ChangeEvent, memo } from "react";
import "./Input.css";

type InputProps = {
  title: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  message?: string;
};

const Input = memo(({ title, placeholder, value, onChange, message }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="input">
      <label className="input__label">
        {title}
        <input
          className="input__field"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        {message && <p className="input__message">{message}</p>}
      </label>
    </div>
  );
});

export default Input;
