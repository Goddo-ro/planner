import { useRef, useState } from "react";
import "./Input.scss";
import PasswordHandler from "./PasswordHandler.jsx";

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
  const [passType, setPassType] = useState("password");
  const [isInputActive, setIsInputActive] = useState(false);

  const inputRef = useRef(null);

  const handlePassShow = () => {
    if (passType === "password")
      setPassType("text");
    else
      setPassType("password");
  }

  const handleFocusOut = () => {
    if (inputRef.current && !inputRef.current.value) {
      setIsInputActive(false);
    }
  }

  return (
    <>
      <div className="input-wrapper">
        <input
          type={type === "password" ? passType : type}
          id={label}
          value={value}
          name={name}
          onBlur={handleFocusOut}
          onChange={onChange}
          disabled={disabled}
          className={`input ${error ? "error" : ""} ${isValid ? "valid" : ""} ${isInputActive && 'active'}`}
          ref={inputRef}
        />
        <label htmlFor={name} className={`input-wrapper__placeholder ${isInputActive && 'active'}`}
               onClick={() => {
                 inputRef.current && inputRef.current.focus();
                 setIsInputActive(true);
               }}
        >
          {placeholder}
        </label>
        {
          type === "password" && <PasswordHandler type={passType} onClick={handlePassShow} />
        }
      </div>
      {
        error && <p className="input-error small">{error}</p>
      }
    </>

  )
}

export default Input;
