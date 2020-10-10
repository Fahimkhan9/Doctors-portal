import React from 'react'
import doctor from '../../images/5790-removebg.png'
import './MakeAppointment.css'
function MakeAppointment() {
    return (
       <section  className="make-appointment-container d-flex justify-content-center mb-5  ">
<div className="row w-75 make-appointment ">
    <div className="col-md-5">
        <img style={{height:"400px"}} src={doctor} alt=""/>
    </div>
    <div className="col-md-7 d-flex flex-column justify-content-end align-items-start ">
<h5>Appointment</h5>
<h3>Make an Appointment Today</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam quos assumenda laborum, dolorem necessitatibus.</p>
<button className="btn btn-primary">Learn More</button>
    </div>
</div>
       </section>
    )
}

export default MakeAppointment
