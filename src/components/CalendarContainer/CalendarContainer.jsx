import { Calendar, momentLocalizer } from "react-big-calendar";
import { useStore } from "effector-react";
import moment from 'moment/dist/moment';
import ru from 'moment/dist/locale/ru';
import { capitalize } from "../../utils/stringUtils.js";
import { $curDate, setDate } from "../../store/date.js";
import "react-big-calendar/lib/sass/styles.scss";
import "./CalendarContainer.scss";

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
  const curDate = useStore($curDate);

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
        onNavigate={(date) => setDate(date)}
        culture="ru"
        showCurrentDate={false}
        components={{
          toolbar: customToolbar,
        }}
      />
    </div>
  )
}

export default CalendarContainer;
