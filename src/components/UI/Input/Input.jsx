import "./Input.scss";

const Input = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        id={label}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        disabled={disabled}
        className={`input ${error ? "error" : ""}`}
      />
      {
        error && <p className="input-error small">{error}</p>
      }
    </div>
  )
}

export default Input;
