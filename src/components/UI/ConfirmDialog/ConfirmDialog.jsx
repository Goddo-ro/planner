import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import Button from "../Button/Button.jsx";
import "./ConfirmDialog.scss";

const ConfirmDialog = ({body, onClose, onConfirm}) => {
  return (
    <ModalWindow className="modal-confirm" onClose={onClose}>
      <h2 className="h2 modal-confirm__title">{body}</h2>
      <div className="modal-confirm__btns">
        <Button className="btn_outline" onClick={onClose}>Нет</Button>
        <Button onClick={onConfirm}>Да</Button>
      </div>
    </ModalWindow>
  )
}

export default ConfirmDialog;
