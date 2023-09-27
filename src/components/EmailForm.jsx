import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { closeEmail, isEmailShow } from "../store/modals.js";
import { useStore } from "effector-react";
import Button from "./UI/Button/Button.jsx";

const EmailForm = () => {
  const isOpen = useStore(isEmailShow)

  return(
    <ModalWindow isShow={isOpen} onClose={closeEmail}>
      <h3>Вход</h3>
      <input placeholder="E-mail"/>
      <Button>Далее</Button>
    </ModalWindow>
  )
}

export default EmailForm;
