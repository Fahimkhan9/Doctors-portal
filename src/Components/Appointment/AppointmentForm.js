import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
function AppointmentForm({ modalIsOpen, closeModal, appointmentOn,date }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) =>{
    data.service = appointmentOn
    data.date = date
    data.created= new Date()
   fetch("http://localhost:5000/addAppointment",{
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(data)
   })
   .then(res => res.json())
   .then(success  => {
     if (success) {
      closeModal()
      alert("appointment created successfully")
     }
   })
 
    };

  console.log(watch("example"));
console.log(date);
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <h2 className="text-brand text-center" style={{ color: "#1CC7C1" }}>
          {appointmentOn}
        </h2>
  <h5 className="text-secondary text-center">On {date.toDateString()}</h5>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              name="name"
              placeholder="your name"
              className="form-control "
              ref={register({ required: true })}
            />

            {errors.name && <span>Name is required</span>}
          </div>
          <div className="form-group">
            <input
              name="email"
              placeholder='your email'
              className="form-control "
              ref={register({ required: true })}
            />

            {errors.email && <span>Email is required</span>}
          </div>
          <div className="form-group">
            <input
              name="phonenumber"
              placeholder="your phone number"
              className="form-control "
              ref={register({ required: true })}
            />

            {errors.phonenumber && <span>phonenumber is required</span>}
          </div>
        
          <div className="d-flex">
            <div className="form-group">
              <select class="form-control " name="gender"   ref={register({ required: true })}>
                <option value="male"   ref={register({ required: true })}>Male</option>
                <option value="female"   ref={register({ required: true })}>Female</option>
                <option value="not set"   ref={register({ required: true })}>Other</option>
              </select>

              {errors.gender && <span>This field is required</span>}
            </div>
            <div className="form-group">
              <input
               type="text"
                name="age"
                placeholder="your age"
                 className="form-control" 
                 ref={register({ required: true })}
                 />
              {errors.age && <span>Age is required</span>}
            </div>
            <div className="form-group">
              <input 
              type="text"
               name="weight"
               placeholder="your weight"
                className="form-control"
                ref={register({ required: true })}
                 />
              {errors.weight && <span>Weight is required</span>}
            </div>
          </div>

        <button type="submit" style={{backgroundColor: "#1CC7C1" }} className="btn btn-brand text-white btn-block">Send</button>
        </form>
      </Modal>
    </div>
  );
}

export default AppointmentForm;
