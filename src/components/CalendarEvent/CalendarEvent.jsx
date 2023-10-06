import "./CalendarEvent.scss";

const CalendarEvent = ({ event }) => (
  <>
    <h4 className="event-content__title">{event.title}</h4>
  </>
);

export default CalendarEvent
