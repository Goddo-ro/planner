import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/sass/styles.scss";
import moment from 'moment/dist/moment';
import ru from 'moment/dist/locale/ru';
moment.locale('ru', ru)

const localizer = momentLocalizer(moment);

localizer.formats.weekdayFormat = (day, culture) => {
  return moment(day).format('dd', culture).charAt(0).toUpperCase() + moment(day).format('dd', culture).slice(1);
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
  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
        views={['month']}
        defaultView="month"
        culture="ru"
      />
    </div>
  )
}

export default CalendarContainer;
