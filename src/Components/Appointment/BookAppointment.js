import React from 'react'

function BookAppointment({date}) {
    return (
       <section className="book-appointment">
           <h2 className="text-center" style={{color:"#1CC7C1"}}>Available Appointment on {date.toDateString()} </h2>
       </section>
    )
}

export default BookAppointment
