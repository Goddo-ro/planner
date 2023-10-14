import { useStore } from "effector-react";
import { $congratsEventData, closeJoinCongrats, closeNewCongrats } from "../../store/modals.js";
import { getFormattedTime, getRussianDayOfWeek, getRussianMonth } from "../../utils/dateUtils.js";
import Button from "../UI/Button/Button.jsx";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";

const NewEventCongratsModal = () => {
  const eventData = useStore($congratsEventData);

  return (
    <ModalWindow onClose={closeNewCongrats}>
      <div className="join-congrats-container"
           style={{
             backgroundImage: "url('public/unicorn_02.png')",
             backgroundPosition: "right",
           }}
      >
        <div className="join-congrats-container__congrats">
          <h3 className="h1">Ура!</h3>
          <p>Вы добавили новое событие:</p>
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
        <Button onClick={closeNewCongrats}>Отлично</Button>
      </div>
    </ModalWindow>
  )
}

export default NewEventCongratsModal;
