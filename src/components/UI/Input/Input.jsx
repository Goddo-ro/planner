import "./Input.scss";
import { useRef } from "react";

const Input = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  isValid,
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <div className="input-wrapper">
        <input
          type={type}
          id={label}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          className={`input ${error ? "error" : ""} ${isValid ? "valid" : ""}`}
          ref={inputRef}
        />
        <label htmlFor={name} className={"input-wrapper__placeholder"}
               onClick={() => inputRef.current && inputRef.current.focus()}
        >
          {placeholder}
        </label>

      </div>
      {
        error && <p className="input-error small">{error}</p>
      }
    </>

  )
}

export default Input;
