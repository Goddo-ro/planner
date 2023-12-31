import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru';
import ArrowLeft from "../../../assets/icons/arrowLeft.svg";
import ArrowRight from "../../../assets/icons/arrowRight.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.scss";

const DateInput = (
  {
    placeholder,
    value,
    onChange,
    isRequired,
    error,
  }
) => {
  const customHeader = ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => {
    // В этой функции вы можете настроить отображение заголовка
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const month = date.getMonth();

    return (
      <div className="month-container">

        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <img src={ArrowLeft} alt="left" />
        </button>
        <span>{months[month]} {year}</span>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <img src={ArrowRight} alt="right"/>
        </button>
      </div>
    );
  }

  const customDayClassNames = date => {
    // Функция, которая возвращает CSS классы для каждого дня
    if (date < new Date()) {
      // Для прошедших дней
      return 'past-day';
    }
    return undefined;
  };

  return (
    <DatePicker
      showIcon
      selected={value}
      onChange={onChange}
      placeholderText={placeholder}
      dateFormat="dd.MM.yyyy"
      locale={ru}
      renderCustomHeader={customHeader}
      dayClassName={customDayClassNames}
      icon={
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.25 6.5C10.9739 6.5 10.75 6.72386 10.75 7V8.5H8C6.89543 8.5 6 9.39543 6 10.5V23.5C6 24.6046 6.89543 25.5 8 25.5H24C25.1046 25.5 26 24.6046 26 23.5V10.5C26 9.39543 25.1046 8.5 24 8.5H21.25V7C21.25 6.72386 21.0261 6.5 20.75 6.5H19.25C18.9739 6.5 18.75 6.72386 18.75 7V8.5H13.25V7C13.25 6.72386 13.0261 6.5 12.75 6.5H11.25ZM9 15.5C8.44772 15.5 8 15.9477 8 16.5V22.5C8 23.0523 8.44772 23.5 9 23.5H23C23.5523 23.5 24 23.0523 24 22.5V16.5C24 15.9477 23.5523 15.5 23 15.5H9ZM10.5 17.5C10.2239 17.5 10 17.7239 10 18V19.5C10 19.7761 10.2239 20 10.5 20H12C12.2761 20 12.5 19.7761 12.5 19.5V18C12.5 17.7239 12.2761 17.5 12 17.5H10.5ZM14.75 18C14.75 17.7239 14.9739 17.5 15.25 17.5H16.75C17.0261 17.5 17.25 17.7239 17.25 18V19.5C17.25 19.7761 17.0261 20 16.75 20H15.25C14.9739 20 14.75 19.7761 14.75 19.5V18ZM20 17.5C19.7239 17.5 19.5 17.7239 19.5 18V19.5C19.5 19.7761 19.7239 20 20 20H21.5C21.7761 20 22 19.7761 22 19.5V18C22 17.7239 21.7761 17.5 21.5 17.5H20Z" fill="#B3B3BC"/>
        </svg>
      }
    />
  )
}

export default DateInput;
