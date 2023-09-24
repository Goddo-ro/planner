import "./Button.scss";

const Button = ({type = 'button', onClick, children, className, disabled, ...rest}) => {
  return (
    <button className={`btn ${className} ${disabled && 'btn_disabled'}`}
            type={type}
            onClick={() => {!disabled && onClick && onClick()}}
            {...rest}
    >
      {children}
    </button>
  )
}

export default Button;
