import "./FormInputsContainer.scss";

const FormInputsContainer = ({children}) => {
  return (
    <div className="form__inputs-container">
      {children}
    </div>
  );
}

export default FormInputsContainer;
