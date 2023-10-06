import EmailForm from "./EmailForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { useStore } from "effector-react";
import RegForm from "./RegForm.jsx";
import {$isEmailShow, $isErrorShow, $isLoginShow, $isRegShow} from "../store/modals.js";
import ErrorModal from "./ErrorModal/ErrorModal.jsx";

const ModalProvider = () => {
  const isEmailShow = useStore($isEmailShow);
  const isLoginShow = useStore($isLoginShow);
  const isRegShow = useStore($isRegShow);
  const isErrorShow = useStore($isErrorShow);

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
      {
        isErrorShow && <ErrorModal/>
      }
    </>
  )
}

export default ModalProvider;
