import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { useStore } from "effector-react";
import { closeLogin, $isLoginShow } from "../store/modals.js";
import { $email } from "../store/authForm.js";
import Form from "./FormContainer/Form.jsx";
import Button from "./UI/Button/Button.jsx";
import Input from "./UI/Input/Input.jsx";
import { useState } from "react";
import { useFetching } from "../hooks/useFetching.js";
import { login } from "../services/UserService.js";
import Loader from "./UI/Loader/Loader.jsx";
import { loginEvent } from "../store/auth.js";

const LoginForm = () => {
  const [password, setPassword] = useState("");

  const emailValue = useStore($email);

  const [signIn, isLoading, error] = useFetching(async (email, password) => {
    const response = await login(email, password);
    closeLogin();
    loginEvent(response?.data);
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading)
      return;
    signIn(emailValue, password);
  }

  return (
    <ModalWindow className="modal__content_login" onClose={closeLogin}>
      <Form onSubmit={handleSubmit}>
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
