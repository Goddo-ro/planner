import "./Form.scss";

const Form = ({children, onSubmit, ...rest}) => {
  return (
    <form onSubmit={onSubmit} className="form" {...rest}>
      {children}
    </form>
  )
}

export default Form;
