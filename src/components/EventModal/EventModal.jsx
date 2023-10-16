import { useState } from "react";
import { useStore } from "effector-react";
import { AiFillInfoCircle } from "react-icons/ai";
import { $eventData, closeEvent, openError, openJoinCongrats, openLogin } from "../../store/modals.js";
import { $token, $user } from "../../store/auth.js";
import { checkIfUserBelongsTo } from "../../utils/eventUtils.js";
import { checkIfDateIsExpired, getFormattedTime, getRussianDayOfWeek, getRussianMonth } from "../../utils/dateUtils.js";
import { joinEvent, leaveEvent } from "../../services/eventService.js";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import ConfirmDialog from "../UI/ConfirmDialog/ConfirmDialog.jsx";
import Button from "../UI/Button/Button.jsx";
import Participants from "../Participants/Participants.jsx";
import EventImages from "../EventImages/EventImages.jsx";
import "./EventModal.scss";

const EventModal = () => {
  const [isConfirmShow, setIsConfirmShow] = useState(false);

  const eventData = useStore($eventData);
  const jwt = useStore($token);
  const user = useStore($user);

  const handleLogin = () => {
    closeEvent();
    openLogin();
  }

  const handleJoin = () => {
    joinEvent(jwt, eventData.id)
      .then(() => {
        openJoinCongrats(eventData);
        closeEvent();
      })
      .catch(() => {
        closeEvent();
        openError();
      });
  }

  const handleLeave = () => {
    leaveEvent(jwt, eventData.id)
      .finally(() => {
        closeEvent();
      })
  }

  return (
    <>
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
              : checkIfUserBelongsTo(eventData.participants, user.id)
                ? <p className="event-container__leave">Вы присоединились к событию. Если передумали, можете <span onClick={() => setIsConfirmShow(true)} className="error-text">отменить участие</span>.</p>
                : <Button onClick={handleJoin}>Присоединиться к событию</Button>)
          }
        </div>
      </ModalWindow>
      {
        isConfirmShow &&
        <ConfirmDialog
          onClose={() => setIsConfirmShow(false)}
          onConfirm={handleLeave}
          body={"Вы действительно хотите отменить участие?"} />
      }
    </>
  )
}

export default EventModal;
