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
import { useState } from "react";
import { isValidEmail } from "../utils/validation.js";

const EmailForm = () => {
  const [error, setError] = useState("");

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isValidEmail(emailValue))
      setError("");
    else
      setError("Некорректный e-mail");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    check(emailValue);
  }

  return(
    <ModalWindow className="modal__content_login" onClose={closeEmail}>
      <Form onSubmit={handleSubmit}>
        <h3 className="h2 form__login-header">Вход</h3>
        <Input value={emailValue}
               onChange={handleEmailChange}
               id={"email"}
               placeholder="E-mail"
               error={error}
        />
        <Button disabled={isChecking || !!error} type="submit">
          {isChecking ? <Loader width={"20px"} height={"20px"}/> : "Далее"}
        </Button>
      </Form>
    </ModalWindow>
  )
}

export default EmailForm;
