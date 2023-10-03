import { useState } from "react";
import { useStore } from "effector-react";
import { closeLogin, closeReg } from "../store/modals.js";
import { $email } from "../store/authForm.js";
import { useFetching } from "../hooks/useFetching.js";
import { register } from "../services/UserService.js";
import { isValidPassword } from "../utils/validation.js";
import Form from "./FormContainer/Form.jsx";
import FormInputsContainer from "./FormInputsContainer/FormInputsContainer.jsx";
import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import Input from "./UI/Input/Input.jsx";
import Button from "./UI/Button/Button.jsx";
import Loader from "./UI/Loader/Loader.jsx";
import PasswordValidInfo from "./UI/PasswordValidInfo/PasswordValidInfo.jsx";
import { generateId } from "../utils/random.js";
import { loginEvent } from "../store/auth.js";

const RegForm = () => {
  const [password, setPassword] = useState("");
  const [isPassValid, setIsPassValid] = useState(false);
  const [passwordErr, setPasswordErr] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [isRepPassValid, setIsRepPassValid] = useState(false);
  const [repPassError, setRepPassError] = useState("");

  const emailValue = useStore($email);

  const [signUp, isLoading, error, setError] = useFetching(async (email, password) => {
    const response = await register(`user${generateId()}`, email, password);
    closeReg();
    loginEvent(response?.data);
  })

  const handlePassChange = (e) => {
    setPassword(e.target.value);
    setError("");
    if (isValidPassword(e.target.value)) {
      setIsPassValid(true);
      setPasswordErr("");
    } else {
      setIsPassValid(false);
      if (e.target.value.length < 8 || e.target.value.length > 32)
        setPasswordErr("Длина пароля от 8 до 32 символов");
      else
        setPasswordErr("Используйте латинские буквы, цифры и спец символы");
    }
  }

  const handleRepPassChange = (e) => {
    setRepPassword(e.target.value);
    if (e.target.value !== password) {
      setRepPassError("Пароли не совпадают");
      setIsRepPassValid(false);
    } else {
      setRepPassError("");
      setIsRepPassValid(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPassValid || !isRepPassValid)
      return;
    signUp(emailValue, password);
  }

  return (
    <ModalWindow className="modal__content_reg" onClose={closeReg}>
      <Form onSubmit={handleSubmit}>
        <h3 className="h2">Регистрация</h3>
        <PasswordValidInfo/>
        <FormInputsContainer>
          <Input value={password}
                 onChange={handlePassChange}
                 id={"password"}
                 type={"password"}
                 placeholder="Пароль"
                 error={passwordErr ? passwordErr : error}
                 isValid={isPassValid || !error}
          />
          <Input value={repPassword}
                 onChange={handleRepPassChange}
                 id={"repeat-password"}
                 type={"password"}
                 placeholder="Повторить пароль"
                 error={repPassError}
                 isValid={isRepPassValid}
          />
        </FormInputsContainer>
        <Button disabled={!isPassValid || !isRepPassValid} type="submit">
          {
            isLoading ? <Loader width={"20px"} height={"20px"} /> : "Зарегистрироваться"
          }
        </Button>
      </Form>
    </ModalWindow>
  )
}

export default RegForm;
