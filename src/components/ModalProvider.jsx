import EmailForm from "./EmailForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { useStore } from "effector-react";
import RegForm from "./RegForm.jsx";
import { $isEmailShow, $isLoginShow, $isRegShow } from "../store/modals.js";

const ModalProvider = () => {
  const isEmailShow = useStore($isEmailShow);
  const isLoginShow = useStore($isLoginShow);
  const isRegShow = useStore($isRegShow);

  return(
    <>
      {
        isEmailShow && <EmailForm/>
      }
      {
        isLoginShow && <LoginForm/>
      }
      {
        isRegShow && <RegForm/>
      }
    </>
  )
}

export default ModalProvider;
