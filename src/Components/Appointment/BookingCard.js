import React from 'react'
import AppointmentForm from './AppointmentForm'

function BookingCard({apdata}) {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
    <div className="col-md-4 mb-5">
    <div class="card text-center p-3" >
        <div class="card-body">
    <h5 class="card-title text-brand">{apdata.subject}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{apdata.visitinhour}</h6>
    <p class="card-text">{apdata.totalspace}</p>
     <button onClick={openModal} className="btn text-uppercase text-white" style={{backgroundImage:"linear-gradient(75deg,#19D3AE,#0fcfec)"}}>Get appointment</button>
     <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} />

     
        </div>
      </div>
    </div>
    )
}

export default BookingCard
