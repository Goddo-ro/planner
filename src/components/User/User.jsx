import Button from "../UI/Button/Button.jsx";
import { openEmail } from "../../store/modals.js";
import { useStore } from "effector-react";
import { $token, logout } from "../../store/auth.js";

const User = () => {
  const jwt = useStore($token);

  return (
    <div>
      {
        jwt
          ? <Button onClick={logout}>Выйти</Button>
          : <Button onClick={openEmail}>Войти</Button>
      }
    </div>
  )
}

export default User;
