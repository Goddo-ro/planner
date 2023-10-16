import { useStore } from "effector-react";
import { $congratsEventData, closeJoinCongrats } from "../../store/modals.js";
import { getFormattedTime, getRussianDayOfWeek, getRussianMonth } from "../../utils/dateUtils.js";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import Button from "../UI/Button/Button.jsx";
import "./JoinCongratsModal.scss";

const JoinCongratsModal = () => {
  const eventData = useStore($congratsEventData);

  return (
    <ModalWindow onClose={closeJoinCongrats}>
      <div className="join-congrats-container" style={{backgroundImage: "url(public/hand.png)"}}>
        <div className="join-congrats-container__congrats">
          <h3 className="h1">Поздравляем!</h3>
          <p>Вы теперь участник события:</p>
          <p className="error-text">{eventData?.title}</p>
        </div>
        <div className="join-congrats-container__dest">
          <ul className="join-congrats-container__time">
            <li>{getRussianDayOfWeek(eventData?.start)}</li>
            <li>{new Date(eventData?.start).getDate()} {getRussianMonth(eventData?.start)}</li>
            <li>{getFormattedTime(eventData?.start)}</li>
          </ul>
          <p>{eventData?.location}</p>
        </div>
        <Button onClick={closeJoinCongrats}>Отлично</Button>
      </div>
    </ModalWindow>
  )
}

export default JoinCongratsModal;
