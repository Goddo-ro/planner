import { useEffect, useState } from "react";
import { checkIfUserBelongsTo } from "../../utils/eventUtils.js";
import { useStore } from "effector-react";
import { $user } from "../../store/auth.js";
import { checkIfDateIsExpired } from "../../utils/dateUtils.js";
import "./CalendarEvent.scss";

const CalendarEvent = ({ event }) => {
  const [isExpired, setIsExpired] = useState(false);

  const user = useStore($user);

  useEffect(() => {
    checkIfDateIsExpired(event.start) && setIsExpired(true);
  }, []);

  return (
    <>
      {checkIfUserBelongsTo(event?.participants, user?.id) && <div className="circle"/>}
      <span className={`event-content__title ${isExpired ? "expired" : ""} ${user && user?.id === event?.createdBy?.id ? "creator" : ""}`}>{event.title}</span>
    </>
  );
}

export default CalendarEvent
