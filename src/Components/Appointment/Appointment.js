import React from 'react'
import { useState } from 'react'
import Footer from '../Shared/Footer'
import Nav from '../Shared/Nav'
import AppointmentHeader from './AppointmentHeader'
import BookAppointment from './BookAppointment'

function Appointment() {
    const [selecteddate,setSelecteddate] = useState(new Date())
    const handleDateChange =(date) => {
        console.log(date);
        setSelecteddate(date)
            }
    return (
        <div>
          <Nav/>
          <AppointmentHeader handleDateChange={handleDateChange} />
          <BookAppointment date={selecteddate}/>
          {/* <Footer/> */}
        </div>
    )
}

export default Appointment
