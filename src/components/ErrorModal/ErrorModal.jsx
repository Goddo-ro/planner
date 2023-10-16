import {closeError} from "../../store/modals.js";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import Button from "../UI/Button/Button.jsx";
import "./ErrorModal.scss";

const ErrorModal = () => {
  return (
    <ModalWindow className="modal__content_error" onClose={closeError}>
      <div className="error-message-container" style={{backgroundImage: "url(public/bird.png)"}}>
        <div className="error-message-container__info-container">
          <h3 className="h1 error-message-container__title">Что-то пошло не так</h3>
          <p className="error-text">Попробуйте позже</p>
        </div>
        <Button className="error-message-container__button" type="button" onClick={closeError}>
          Хорошо
        </Button>
      </div>
    </ModalWindow>
  )
}

export default ErrorModal;
