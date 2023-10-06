import "./CalendarEvent.scss";
import { useEffect, useState } from "react";

const CalendarEvent = ({ event }) => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const currentDateTime = new Date();
    const eventStartDate = new Date(event.start);

    setIsExpired(eventStartDate < currentDateTime);
  }, []);

  return (
    <>
      <h4 className={`event-content__title ${isExpired ? "expired" : ""}`}>{event.title}</h4>
    </>
  );
}

export default CalendarEvent
