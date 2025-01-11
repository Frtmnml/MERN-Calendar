import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal'

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



  const onCloseModal = () => {
    console.log("cerrando modal")
    setIsOpen(false)
  }


  return (
    <Modal
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={300}
      isOpen= {isOpen}
      onRequestClose={ onCloseModal}
      style={customStyles}
    >

      <h1>hola mundo</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis atque ab vitae!</p>

    </Modal>
  )
}

