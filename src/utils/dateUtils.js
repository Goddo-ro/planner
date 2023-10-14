export const checkIfDateIsExpired = (date) => {
  return new Date(date) < new Date();
}

export function getRussianDayOfWeek(dateSting) {
  const date = new Date(dateSting);
  const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
  return daysOfWeek[date.getDay()];
}

// Функция для получения названия месяца на русском
export function getRussianMonth(dateString) {
  const date = new Date(dateString);
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return months[date.getMonth()];
}

// Функция для форматирования чисел с добавлением нуля перед однозначными числами
export function formatNumber(number) {
  return number < 10 ? "0" + number : number.toString();
}

export function getFormattedTime(dateString) {
  const date = new Date(dateString);
  return `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`;
}

export function updateTime(dateString, newTime) {
  const date = new Date(dateString);
  const [newHours, newMinutes] = newTime.split(":");
  date.setHours(newHours, newMinutes);
  return date;
}
