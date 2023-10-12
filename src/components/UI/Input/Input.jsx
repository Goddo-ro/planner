import { useRef, useState } from "react";
import PasswordHandler from "./PasswordHandler.jsx";
import "./Input.scss";
import { AiOutlineClose } from "react-icons/ai";

const Input = ({
  type = "text",
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  isValid,
  className,
  isRequired,
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
      <div className={`input-wrapper ${className ? className : ''}`}>
        <input
          type={type === "password" ? passType : type}
          id={label}
          value={value}
          name={name}
          onBlur={handleFocusOut}
          onFocus={() => setIsInputActive(true)}
          onChange={onChange}
          disabled={disabled}
          className={`input ${error ? "error" : ""} ${isValid ? "valid" : ""} ${isInputActive ? 'active' : ''}`}
          ref={inputRef}
        />
        <label htmlFor={name} className={`input-wrapper__placeholder ${isInputActive && 'active'}`}
               onClick={() => {
                 inputRef.current && inputRef.current.focus();
                 setIsInputActive(true);
               }}
        >
          {placeholder}{isRequired && <span className="error-text">*</span>}
        </label>
        {
          type === "password" && value && <PasswordHandler type={passType} onClick={handlePassShow} />
        }
        {
          type !== "password" && value &&
          <AiOutlineClose
            onClick={() => {
              onChange({ target: { name: name, value: "" } })
              inputRef.current && inputRef.current.focus();
            }}
            className="input-wrapper__reset"
            fill="#B3B3BC"
            color="#B3B3BC"
          />
        }
        {
          error && <p className="input-error small">{error}</p>
        }
      </div>
    </>

  )
}

export default Input;
