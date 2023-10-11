import { useState } from "react";
import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { useStore } from "effector-react";
import { closeLogin, openError } from "../store/modals.js";
import { $email } from "../store/authForm.js";
import Form from "./FormContainer/Form.jsx";
import Button from "./UI/Button/Button.jsx";
import Input from "./UI/Input/Input.jsx";
import { useFetching } from "../hooks/useFetching.js";
import { login } from "../services/userService.js";
import Loader from "./UI/Loader/Loader.jsx";
import { loginEvent } from "../store/auth.js";

const LoginForm = () => {
  const [password, setPassword] = useState("");

  const emailValue = useStore($email);

  const [signIn, isLoading, error, setError] = useFetching(async (email, password) => {
    try {
      const response = await login(email, password);
      closeLogin();
      loginEvent(response?.data);
    } catch (e) {
      if (e.response.status === 400) {
        setError("Неверный пароль")
      } else if (e.response.status >= 500) {
        closeLogin();
        openError();
      }
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading)
      return;
    signIn(emailValue, password);
  }

  return (
    <ModalWindow className="modal__content_login" onClose={closeLogin}>
      <Form onSubmit={handleSubmit} style={{padding: "133px 127px", minWidth: "612px"}}>
        <h3 className="h2 form__login-header">Вход</h3>
        <Input value={password}
               onChange={(e) => setPassword(e.target.value)}
               type={"password"}
               id={"password"}
               placeholder="Пароль"
               error={error}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loader width={"20px"} height={"20px"} /> : "Войти"}
        </Button>
      </Form>
    </ModalWindow>
  )
}

export default LoginForm;
