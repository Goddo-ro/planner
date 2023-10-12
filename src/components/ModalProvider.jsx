import EmailForm from "./EmailForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { useStore } from "effector-react";
import RegForm from "./RegForm.jsx";
import {
  $isEmailShow,
  $isErrorShow,
  $isEventShow,
  $isJoinCongratsShow,
  $isLoginShow, $isNewEventShow,
  $isRegShow
} from "../store/modals.js";
import ErrorModal from "./ErrorModal/ErrorModal.jsx";
import EventModal from "./EventModal/EventModal.jsx";
import JoinCongratsModal from "./JoinCongratsModal/JoinCongratsModal.jsx";
import NewEventModal from "./NewEventModal/NewEventModal.jsx";

const ModalProvider = () => {
  const isEmailShow = useStore($isEmailShow);
  const isLoginShow = useStore($isLoginShow);
  const isRegShow = useStore($isRegShow);
  const isErrorShow = useStore($isErrorShow);
  const isEventShow = useStore($isEventShow);
  const isJoinCongratsShow = useStore($isJoinCongratsShow);
  const isNewEventSHow = useStore($isNewEventShow);

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
      {
        isEventShow && <EventModal/>
      }
      {
        isJoinCongratsShow && <JoinCongratsModal/>
      }
      {
        isNewEventSHow && <NewEventModal/>
      }
    </>
  )
}

export default ModalProvider;
