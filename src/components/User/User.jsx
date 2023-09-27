import Button from "../UI/Button/Button.jsx";
import { openEmail } from "../../store/modals.js";

const User = () => {
  return (
    <div>
      <Button onClick={openEmail}>Войти</Button>
    </div>
  )
}

export default User;
