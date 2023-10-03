import {PiEyeClosed, PiEye} from "react-icons/pi";

const PasswordHandler = ({type, onClick}) => {
  return (
    <button type="button" className="input-wrapper__pass-handler" onClick={onClick}>
      {
        type === "password" ? <PiEyeClosed color="#B3B3BC" fill="#B3B3BC"/> : <PiEye color="#B3B3BC" fill="#B3B3BC" />
      }
    </button>
  )
}

export default PasswordHandler;
