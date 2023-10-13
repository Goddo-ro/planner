import { useFormik } from "formik";
import ModalWindow from "../UI/ModalWindow/ModalWindow.jsx";
import Form from "../UI/Form/Form.jsx";
import Input from "../UI/Input/Input.jsx";
import { closeNewEvent } from "../../store/modals.js";
import DateInput from "../UI/DateInput/DateInput.jsx";
import "./NewEventModal.scss";

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Обязательное поле"
  }

  return errors;
}

const NewEventModal = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      startDate: null,
      endDate: null,
    },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  })

  return (
    <ModalWindow className="new-event" onClose={closeNewEvent}>
      <h3 className="h2 new-event__title">Создание события</h3>
      <Form className="new-event__form" onSubmit={formik.handleSubmit}>
        <Input
          name="title"
          isRequired
          className="left"
          placeholder="Название"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.errors.title}
        />
        <div className="new-event__date-container right">
          <DateInput placeholder={"Начало"}
                     value={formik.values.startDate}
                     onChange={(e) => formik.handleChange({target: {name: "startDate", value: e}})}
          />
          <DateInput placeholder={"Конец"}
                     value={formik.values.endDate}
                     onChange={(e) => formik.handleChange({target: {name: "endDate", value: e}})}
          />
        </div>
      </Form>
    </ModalWindow>
  )
}

export default NewEventModal;
