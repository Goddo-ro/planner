import EmailForm from "./EmailForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { useStore } from "effector-react";
import { $token } from "../store/auth.js";

const ModalProvider = () => {
  const jwt = useStore($token);

  return(
    <>
      {
        !jwt &&
        <>
          <EmailForm/>
          <LoginForm/>
        </>
      }
    </>
  )
}

export default ModalProvider;
