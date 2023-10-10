import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import { $eventData, closeEvent } from "../../store/modals.js";
import { useStore } from "effector-react";
import { getFormattedTime, getRussianDayOfWeek, getRussianMonth } from "../../utils/dateUtils.js";
import Participants from "../Participants/Participants.jsx";
import "./EventModal.scss";
import EventImages from "../EventImages/EventImages.jsx";

const EventModal = () => {
  const eventData = useStore($eventData);

  return (
    <ModalWindow onClose={closeEvent}>
      <div className="event-container">
        <h2 className="event-container__title">{eventData.title}</h2>
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
        <EventImages images={eventData.photos}/>
      </div>
    </ModalWindow>
  )
}

export default EventModal;
