import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import { $joinEventData, closeJoinCongrats } from "../../store/modals.js";
import Button from "../UI/Button/Button.jsx";
import { useStore } from "effector-react";
import { getFormattedTime, getRussianDayOfWeek, getRussianMonth } from "../../utils/dateUtils.js";
import "./JoinCongratsModal.scss";

const JoinCongratsModal = () => {
  const eventData = useStore($joinEventData);

  return (
    <ModalWindow onClose={closeJoinCongrats}>
      <div className="join-congrats-container">
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
