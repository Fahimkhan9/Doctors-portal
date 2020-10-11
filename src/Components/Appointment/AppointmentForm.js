import React from 'react'
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#root')
function AppointmentForm({modalIsOpen,closeModal}) {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    
    return (
        <div>
                    {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
        
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          
          <button onClick={closeModal}>close</button>
     
         {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" className="form-control w-50" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" className="form-control w-50" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </Modal>

        </div>
    )
}

export default AppointmentForm
