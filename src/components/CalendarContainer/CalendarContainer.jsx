import { Calendar, momentLocalizer } from "react-big-calendar";
import { useStore } from "effector-react";
import moment from 'moment/dist/moment';
import ru from 'moment/dist/locale/ru';
import { capitalize } from "../../utils/stringUtils.js";
import { $curDate, setDate } from "../../store/date.js";
import "react-big-calendar/lib/sass/styles.scss";
import "./CalendarContainer.scss";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching.js";
import { getEvents } from "../../services/eventService.js";
import { $token } from "../../store/auth.js";
import transformEvents from "../../utils/transformEvents.js";

moment.updateLocale('ru', ru)

const localizer = momentLocalizer(moment);

localizer.formats.weekdayFormat = (day, culture) => {
  return capitalize(moment(day).format('dd', culture));
};

localizer.formats.dateFormat = (date, culture) => {
  const dayOfMonth = moment(date).date();
  if (dayOfMonth === 1) {
    return moment(date).format('D MMM.', culture).replace('.', '');
  } else {
    return moment(date).format('D', culture);
  }
};

const CalendarContainer = () => {
  const [events, setEvents] = useState([]);

  const curDate = useStore($curDate);
  const jwt = useStore($token);

  const [fetchEvents] = useFetching(async (jwt) => {
    const response = await getEvents(jwt);
    setEvents(transformEvents(response.data.data));
  });

  useEffect(() => {
    fetchEvents(jwt);
  }, []);

  const customToolbar = () => <></>

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 240px)" }}
        views={['month']}
        defaultView="month"
        date={curDate}
        events={events}
        onNavigate={(date) => setDate(date)}
        culture="ru"
        showCurrentDate={false}
        components={{
          toolbar: customToolbar,
        }}
        timeslots={1} // Set timeslots to 1
        step={60}
      />
    </div>
  )
}

export default CalendarContainer;
