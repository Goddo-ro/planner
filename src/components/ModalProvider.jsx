import EmailForm from "./EmailForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { useStore } from "effector-react";
import { $token } from "../store/auth.js";
import RegForm from "./RegForm.jsx";

const ModalProvider = () => {
  const jwt = useStore($token);

  return(
    <>
      {
        !jwt &&
        <>
          <EmailForm/>
          <LoginForm/>
          <RegForm/>
        </>
      }
    </>
  )
}

export default ModalProvider;
