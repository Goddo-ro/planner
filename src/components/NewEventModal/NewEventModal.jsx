import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import Form from "../UI/Form/Form.jsx";
import "./NewEventModal.scss";
import Input from "../UI/Input/Input.jsx";
import { closeNewEvent } from "../../store/modals.js";

const NewEventModal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <ModalWindow className="new-event" onClose={closeNewEvent}>
      <h3 className="h2 new-event__title">Создание события</h3>
      <Form className="new-event__form" onSubmit={handleSubmit}>
        <Input isRequired className="left" placeholder="Название" />
        <div className="new-event__date-container right"></div>
      </Form>
    </ModalWindow>
  )
}

export default NewEventModal;
