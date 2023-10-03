import { useStore } from "effector-react";
import { useEffect } from "react";
import Button from "../UI/Button/Button.jsx";
import { getMe } from "../../services/UserService.js";
import { useFetching } from "../../hooks/useFetching.js";
import { openEmail } from "../../store/modals.js";
import { $token, $user, loginEvent } from "../../store/auth.js";
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
          ?
          <div className="user-icon-container"/>
          : <Button onClick={openEmail}>Войти</Button>
      }
    </div>
  )
}

export default User;
