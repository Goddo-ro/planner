import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { useStore } from "effector-react";
import { closeEmail, closeLogin, isLoginShow } from "../store/modals.js";
import { email } from "../store/authForm.js";
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

  const isOpen = useStore(isLoginShow);
  const emailValue = useStore(email);

  const [signIn, isLoading, error, setError] = useFetching(async (email, password) => {
    const response = await login(email, password);
    closeLogin();
    loginEvent({token: response?.data?.jwt, user: response?.data?.user});
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(emailValue, password);
  }

  const handleClose = () => {
    setPassword("");
    setError("");
    closeLogin();
  }

  return (
    <ModalWindow isShow={isOpen} onClose={handleClose}>
      <Form onSubmit={handleSubmit}>
        <h3 className="h2">Вход</h3>
        <Input value={password}
               onChange={(e) => setPassword(e.target.value)}
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
