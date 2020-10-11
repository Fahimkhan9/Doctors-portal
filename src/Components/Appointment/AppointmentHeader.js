import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import chair from '../../images/Mask Group 1.png'
import './AppointmentHeader.css'
function AppointmentHeader(props) {
  
    return (
        <main style={{height:"600px"}} className="row appointmentHeader d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
        <h1 sstyle={{color:"#3A4256"}}>Appointment</h1>
        <Calendar 
        className="border-0"
        onChange={props.handleDateChange}
        value={new Date()}
        />
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid"/>
        </div>
                </main>
    )
}

export default AppointmentHeader
