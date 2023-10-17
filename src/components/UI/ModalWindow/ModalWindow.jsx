import { useEffect, useRef } from "react";
import {AiOutlineClose} from "react-icons/ai";
import "./ModalWindow.scss";

const ModalWindow = ({isShow = true, onClose, children, className}) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (dialogRef.current?.open && !isShow) {
      dialogRef.current?.close();
    } else if (!dialogRef.current?.open && isShow) {
      dialogRef.current?.showModal();
    }
  }, [isShow]);

  const handleClick = (e) => {
    if (e.target.className === "modal") onClose(e);
  }

  return (
    <dialog
      aria-modal="true"
      className="modal"
      onClick={handleClick}
      ref={dialogRef}
    >
      <div className={`modal__content ${className}`}>
        <button tabIndex={0} disabled={false} role="button" className="modal__close" onClick={onClose}>
          <AiOutlineClose size={32} fill="#B3B3BC" color="#B3B3BC" />
        </button>
        {children}
      </div>
    </dialog>
  )
}

export default ModalWindow;
