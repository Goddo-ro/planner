import "./CalendarEvent.scss";
import { useEffect, useState } from "react";
import { checkIfDateIsExpired, checkIfUserBelongsTo } from "../../utils/eventUtils.js";
import { useStore } from "effector-react";
import { $token, $user } from "../../store/auth.js";

const CalendarEvent = ({ event }) => {
  const [isExpired, setIsExpired] = useState(false);
  const [doesUserBelongs, setDoesUserBelongs] = useState(false);

  const user = useStore($user);

  useEffect(() => {
    checkIfDateIsExpired(event.start) && setIsExpired(true);
    if (user.id) {
      checkIfUserBelongsTo(event.participants, user.id) && setDoesUserBelongs(true);
    }
  }, []);

  return (
    <>
      {doesUserBelongs && <div className="circle"/>}
      <h4 className={`event-content__title ${isExpired ? "expired" : ""}`}>{event.title}</h4>
    </>
  );
}

export default CalendarEvent
