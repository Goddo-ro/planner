import ModalWindow from "./UI/ModalWindow/ModalWindow.jsx";
import { closeEmail, isEmailShow, openLogin } from "../store/modals.js";
import { useStore } from "effector-react";
import Button from "./UI/Button/Button.jsx";
import Form from "./FormContainer/Form.jsx";
import Input from "./UI/Input/Input.jsx";
import { email, setEmail } from "../store/authform.js";
import { useFetching } from "../hooks/useFetching.js";
import { checkEmail } from "../services/UserService.js";
import Loader from "./UI/Loader/Loader.jsx";

const EmailForm = () => {
  const isOpen = useStore(isEmailShow);
  const emailValue = useStore(email);

  const [check, isChecking] = useFetching(async (email) => {
    try {
      const response = await checkEmail(email);
      // Open password form
      closeEmail();
      openLogin();
    } catch (e) {
      // Open registration form
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    check(emailValue);
  }

  return(
    <ModalWindow isShow={isOpen} onClose={closeEmail}>
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
