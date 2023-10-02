import { AiFillInfoCircle } from "react-icons/ai";
import "./PasswordValidInfo.scss";

const PasswordValidInfo = () => {
  return (
    <div className="password-info-container">
      <AiFillInfoCircle size={36}/>
      <p className="small">
        {
          `Используйте от 8 до 32 символов: строчные и прописные латинские буквы (A-z), цифры (0-9) и спец символы ( . , : ; ? ! * + % - < > @ [ ] { } / \\ _ {} $ # )`
        }
      </p>
    </div>
);
}

export default PasswordValidInfo;
