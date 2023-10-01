import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { useStore } from "effector-react";
import { closeLogin, isLoginShow } from "../store/modals.js";
import { email } from "../store/authform.js";
import Form from "./FormContainer/Form.jsx";
import Button from "./UI/Button/Button.jsx";
import Input from "./UI/Input/Input.jsx";
import { useState } from "react";
import { useFetching } from "../hooks/useFetching.js";
import { login } from "../services/UserService.js";
import Loader from "./UI/Loader/Loader.jsx";

const LoginForm = () => {
  const [password, setPassword] = useState("");

  const isOpen = useStore(isLoginShow);
  const emailValue = useStore(email);

  const [singIn, isLoading, error, setError] = useFetching(async (email, password) => {
    const response = await login(email, password);
    console.log(response);
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    singIn(emailValue, password);
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
