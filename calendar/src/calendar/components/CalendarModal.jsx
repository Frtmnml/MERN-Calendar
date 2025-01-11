import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addHours } from 'date-fns';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


export const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true)

  const [formValue, setFormValue] = useState({
    title: 'Joshua',
    notes:'Herrera',
    start: new Date(),
    end: addHours(new Date(), 2),
  })

  const onInputChange = ({target}) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value
    })
  }

  const onDateChanged = (event, changing) => {
    setFormValue({
      ...formValue,
      [changing]: event
    })
  }




  const onCloseModal = () => {
    console.log("cerrando modal")
    setIsOpen(false)
  }


  return (
    <Modal
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >

      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">

        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
          selected={formValue.start}
          className='form-control'
          onChange={ (event) => onDateChanged(event, 'start')}
          dateFormat='Pp'
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
          minDate={ formValue.start }
          selected={formValue.end}
          className='form-control'
          onChange={ (event) => onDateChanged(event, 'end')}
          dateFormat='Pp'
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={ formValue.title}
            onChange={ onInputChange }
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>

    </Modal>
  )
}

