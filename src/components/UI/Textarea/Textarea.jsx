import "./Textarea.scss";
import { useRef, useState } from "react";

const Textarea = (
  {
    className,
    placeholder,
    error,
    value,
    onChange,
    isRequired,
    maxLettersCount = 500,
    name,
  }
) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const inputRef = useRef(null);

  const handleFocusOut = () => {
    if (inputRef.current && !inputRef.current.value) {
      setIsInputActive(false);
    }
  }

  return (
    <div className={`input-wrapper textarea-wrapper ${className ? className : ''}`}>
      <textarea
        name={name}
        value={value}
        onChange={e => {
          if (e.target.value.length > value?.length && value?.length === maxLettersCount) return;
          onChange(e);
        }}
        onBlur={handleFocusOut}
        onFocus={() => setIsInputActive(true)}
        className={`input ${error ? "error" : ""} ${isInputActive ? 'active' : ''}`}
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
      <div className="textarea-wrapper__bottom">
        <p className="input-error small">{error}</p>
        {
          isInputActive && <div className="textarea-wrapper__count">{value?.length}/{maxLettersCount}</div>
        }
      </div>
    </div>
  )
}

export default Textarea;
