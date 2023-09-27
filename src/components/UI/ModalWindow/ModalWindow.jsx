import "./ModalWindow.scss";
import {AiOutlineClose} from "react-icons/ai";

const ModalWindow = ({isShow, onClose, children}) => {
  return (
    <div style={{display: `${isShow ? "flex" : "none"}`}} className="modal">
      <div className="modal__content">
        <AiOutlineClose onClick={onClose} className="modal__close" />
        {children}
      </div>
    </div>
  )
}

export default ModalWindow;
