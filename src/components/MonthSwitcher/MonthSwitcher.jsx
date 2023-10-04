import { useStore } from "effector-react";
import { $curDate, decreaseMonth, increaseMonth } from "../../store/date.js";
import { capitalize } from "../../utils/stringUtils.js";
import arrowLeft from "../../assets/icons/arrowLeft.svg"
import arrowRight from "../../assets/icons/arrowRight.svg"
import "./MonthSwitcher.scss";
import { $token } from "../../store/auth.js";

const MonthSwitcher = () => {
  const date = useStore($curDate);
  const jwt = useStore($token);

  return (
    <div className={`month-switcher ${!jwt ? 'mr' : ''}`}>
      <span className="h3 bold">
        {capitalize(date.toLocaleString('default', {month: 'long'}))} {date.getFullYear() !== new Date().getFullYear() ? date.getFullYear() : ""}
      </span>
      <div className="month-switcher__switches">
        <button className="month-switcher__switcher" onClick={() => decreaseMonth()}>
          <img src={arrowLeft} alt="left"/>
        </button>
        <button className="month-switcher__switcher" onClick={() => increaseMonth()}>
          <img src={arrowRight} alt="left"/>
        </button>
      </div>
    </div>
  )
}

export default MonthSwitcher;
