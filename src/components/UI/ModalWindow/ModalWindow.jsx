import "./ModalWindow.scss";
import {AiOutlineClose} from "react-icons/ai";

const ModalWindow = ({isShow = true, onClose, children, className}) => {
  const handleClick = (e) => {
    if (e.target.className === "modal") onClose(e)
  }

  return (
    <div style={{display: `${isShow ? "flex" : "none"}`}} className="modal" onClick={handleClick}>
      <dialog aria-modal="true" className={`modal__content ${className}`}>
        <AiOutlineClose onClick={onClose} size={32} className="modal__close" fill="#B3B3BC" color="#B3B3BC" />
        {children}
      </dialog>
    </div>
  )
}

export default ModalWindow;
