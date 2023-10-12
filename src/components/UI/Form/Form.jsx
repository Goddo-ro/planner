import "./Form.scss";

const Form = ({children, onSubmit, className, ...rest}) => {
  return (
    <form onSubmit={onSubmit} className={`form ${className ? className : ''}`} {...rest}>
      {children}
    </form>
  )
}

export default Form;
