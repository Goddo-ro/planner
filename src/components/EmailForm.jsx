import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { closeEmail, $isEmailShow, openLogin, openReg } from "../store/modals.js";
import { useStore } from "effector-react";
import Button from "./UI/Button/Button.jsx";
import Form from "./FormContainer/Form.jsx";
import Input from "./UI/Input/Input.jsx";
import { $email, setEmail } from "../store/authForm.js";
import { useFetching } from "../hooks/useFetching.js";
import { checkEmail } from "../services/UserService.js";
import Loader from "./UI/Loader/Loader.jsx";

const EmailForm = () => {
  const emailValue = useStore($email);

  const [check, isChecking] = useFetching(async (email) => {
    try {
      await checkEmail(email);
      // Open password form
      closeEmail();
      openLogin();
    } catch (e) {
      // Open registration form
      closeEmail();
      openReg();
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    check(emailValue);
  }

  return(
    <ModalWindow onClose={closeEmail}>
      <Form onSubmit={handleSubmit}>
        <h3 className="h2">Вход</h3>
        <Input value={emailValue}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="E-mail"
        />
        <Button disabled={isChecking} type="submit">
          {isChecking ? <Loader width={"20px"} height={"20px"}/> : "Далее"}
        </Button>
      </Form>
    </ModalWindow>
  )
}

export default EmailForm;
