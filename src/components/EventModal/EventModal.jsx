import { useStore } from "effector-react";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import { $eventData, closeEvent, openLogin } from "../../store/modals.js";
import { $token } from "../../store/auth.js";
import { checkIfDateIsExpired, getFormattedTime, getRussianDayOfWeek, getRussianMonth } from "../../utils/dateUtils.js";
import Participants from "../Participants/Participants.jsx";
import EventImages from "../EventImages/EventImages.jsx";
import Button from "../UI/Button/Button.jsx";
import { AiFillInfoCircle } from "react-icons/ai";
import "./EventModal.scss";

const EventModal = () => {
  const eventData = useStore($eventData);
  const jwt = useStore($token);

  const handleLogin = () => {
    closeEvent();
    openLogin();
  }

  return (
    <ModalWindow onClose={closeEvent}>
      <div className={`event-container ${checkIfDateIsExpired(eventData.start) ? "expired" : ""}`}>
        <h2 className="event-container__title">{eventData.title}</h2>
        {
          checkIfDateIsExpired(eventData.start) &&
          <div className="expired-event-message">
            <AiFillInfoCircle size={24}/>
            <p>Мероприятие уже прошло</p>
          </div>
        }
        <div className="event-container__description-container">
          <div className="event-container__destination">
            <div className="event-container__time">
              <p>{getRussianDayOfWeek(eventData.start)}</p>
              <p>{new Date(eventData.start).getDate()} {getRussianMonth(eventData.start)}</p>
              <p>{getFormattedTime(eventData.start)}</p>
            </div>
            <p className="event-container__location">{eventData.location}</p>
          </div>
          <p className="event-container__description">{eventData.description}</p>
        </div>
        <Participants participants={eventData.participants}/>
        {
          eventData.photos && <EventImages images={eventData.photos}/>
        }
        {
          !checkIfDateIsExpired(eventData.start) && (!jwt
            ? <p><span onClick={handleLogin} className="error-text">Войдите</span>, чтобы присоединиться к событию</p>
            : <Button>Присоединиться к событию</Button>)
        }
      </div>
    </ModalWindow>
  )
}

export default EventModal;
