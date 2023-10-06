import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button.jsx";
import { getMe } from "../../services/userService.js";
import { useFetching } from "../../hooks/useFetching.js";
import { openEmail } from "../../store/modals.js";
import {$token, $user, loginEvent, logout} from "../../store/auth.js";
import PlusWhiteIcon from "../../assets/icons/plus.svg";
import PlusBlackIcon from "../../assets/icons/plusBlack.svg";
import "./User.scss";

const User = () => {
  const jwt = useStore($token);
  const user = useStore($user);

  const [getUser] = useFetching(async (token) => {
    const response = await getMe(token);
    loginEvent({jwt, user: response?.data});
  });

  useEffect(() => {
    if (jwt && !user) {
      getUser(jwt);
    }
  }, []);

  return (
    <div>
      {
        jwt
          ? <EnteredUserContainer/>
          : <Button onClick={openEmail}>Войти</Button>
      }
    </div>
  )
}

const EnteredUserContainer = () => {
  const [curIcon, setCurIcon] = useState(PlusWhiteIcon);
  const [isExitShow, setIsExitShow] = useState(false);

  return (
    <div className="entered-user-container">
      <Button
        onMouseEnter={() => setCurIcon(PlusBlackIcon)}
        onMouseLeave={() => setCurIcon(PlusWhiteIcon)}
        onFocus={() => setCurIcon(PlusBlackIcon)}
        onBlur={() => setCurIcon(PlusWhiteIcon)}
      >
        <img src={curIcon} alt="new event"/>
      </Button>
      <div className="user-icon-container" onClick={logout}/>
    </div>
  )
}

export default User;
