import { useEffect, useState } from "react";
import { checkIfUserBelongsTo } from "../../utils/eventUtils.js";
import { useStore } from "effector-react";
import { $user } from "../../store/auth.js";
import { checkIfDateIsExpired } from "../../utils/dateUtils.js";
import "./CalendarEvent.scss";

const CalendarEvent = ({ event }) => {
  const [isExpired, setIsExpired] = useState(false);

  const user = useStore($user);

  const isOwner = () => {
    return user && user?.id === event?.owner?.id;
  }

  useEffect(() => {
    checkIfDateIsExpired(event.start) && setIsExpired(true);
  }, []);

  return (
    <>
      {isOwner() && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0C7 0 8.05062 3.10087 9.47487 4.52513C10.8991 5.94938 14 7 14 7C14 7 10.8991 8.05062 9.47487 9.47487C8.05062 10.8991 7 14 7 14C7 14 5.94938 10.8991 4.52513 9.47487C3.10087 8.05062 0 7 0 7C0 7 3.10087 5.94938 4.52513 4.52513C5.94938 3.10087 7 0 7 0Z" fill="white"/>
      </svg>}
      {!isOwner() && checkIfUserBelongsTo(event?.participants, user?.id) && <div className="circle"/>}
      <span className={`event-content__title ${isExpired ? "expired" : ""} ${isOwner() ? "creator" : ""}`}>{event.title}</span>
    </>
  );
}

export default CalendarEvent
