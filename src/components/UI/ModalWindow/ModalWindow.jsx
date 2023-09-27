const ModalContainer = ({isShow, children}) => {
  return (
    <div style={{display: `${isShow ? "block" : "none"}`}} className="modal-container">
      {children}
    </div>
  )
}

export default ModalContainer;
