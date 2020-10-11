import React from 'react'
import BookingCard from './BookingCard'
const appointmentdata =[
  {
      subject:"Teeth Orthodontics",
      visitinhour:"8:00 am -  9:00 am",
      totalspace:10,
      id:1
  },
  {
    subject:"Teeth Orthodontics",
    visitinhour:"8:00 am -  9:00 am",
    totalspace:10,
    id:2
},
{
    subject:"Teeth Orthodontics",
    visitinhour:"8:00 am -  9:00 am",
    totalspace:10,
    id:3
},
{
    subject:"Teeth Orthodontics",
    visitinhour:"8:00 am -  9:00 am",
    totalspace:10,
    id:4
},
{
    subject:"Teeth Orthodontics",
    visitinhour:"8:00 am -  9:00 am",
    totalspace:10,
    id:5
},
{
    subject:"Teeth Orthodontics",
    visitinhour:"8:00 am -  9:00 am",
    totalspace:10,
    id:6
},
]
function BookAppointment({date}) {
    return (
       <section className="book-appointment">
           <h2 className="text-center mb-5" style={{color:"#1CC7C1"}}>Available Appointment on {date.toDateString()} </h2>
           <div className="row">
           {
               appointmentdata.map(apdata =><BookingCard key={apdata.id} apdata={apdata} date={date} />)
           }
           </div>
          
       </section>
    )
}

export default BookAppointment
