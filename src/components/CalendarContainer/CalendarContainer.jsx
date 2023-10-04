import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/sass/styles.scss";
import moment from 'moment/dist/moment';
import ru from 'moment/dist/locale/ru';
import { capitalize } from "../../utils/stringUtils.js";
import { useStore } from "effector-react";
import { $curDate, setDate } from "../../store/date.js";
moment.locale('ru', ru)

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
  const curDate = useStore($curDate);

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
        views={['month']}
        defaultView="month"
        date={curDate}
        onNavigate={(date) => setDate(date)}
        culture="ru"
      />
    </div>
  )
}

export default CalendarContainer;
