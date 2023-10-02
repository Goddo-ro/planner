import { useState } from "react";
import { useStore } from "effector-react";
import { $isRegShow, closeReg } from "../store/modals.js";
import { $email } from "../store/authForm.js";
import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import Form from "./FormContainer/Form.jsx";
import Input from "./UI/Input/Input.jsx";
import Button from "./UI/Button/Button.jsx";
import { useFetching } from "../hooks/useFetching.js";
import { register } from "../services/UserService.js";
import { loginEvent } from "../store/auth.js";
import Loader from "./UI/Loader/Loader.jsx";

const RegForm = () => {
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

  const emailValue = useStore($email);

  const [signUp, isLoading, error, setError] = useFetching(async (email, password) => {
    const response = await register("NEW", email, password);
    console.log(response)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(emailValue, password);
  }

  const handleClose = () => {
    setPassword("");
    setRepPassword("");
    closeReg();
  }

  return (
    <ModalWindow onClose={handleClose}>
      <Form onSubmit={handleSubmit}>
        <h3 className="h2">Регистрация</h3>
        <Input value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Пароль"
        />
        <Input value={repPassword}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Повторить пароль"
               error={error}
        />
        <Button type="submit">
          {
            isLoading ? <Loader width={"20px"} height={"20px"} /> : "Зарегистрироваться"
          }
        </Button>
      </Form>
    </ModalWindow>
  )
}

export default RegForm;
