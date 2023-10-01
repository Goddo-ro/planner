import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { closeEmail, isEmailShow } from "../store/modals.js";
import { useStore } from "effector-react";
import Button from "./UI/Button/Button.jsx";
import Form from "./FormContainer/Form.jsx";
import Input from "./UI/Input/Input.jsx";
import { email, setEmail } from "../store/authform.js";

const EmailForm = () => {
  const isOpen = useStore(isEmailShow);
  const emailValue = useStore(email)

  return(
    <ModalWindow isShow={isOpen} onClose={closeEmail}>
      <Form>
        <h3 className="h2">Вход</h3>
        <Input value={emailValue}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="E-mail"
        />
        <Button>Далее</Button>
      </Form>
    </ModalWindow>
  )
}

export default EmailForm;
