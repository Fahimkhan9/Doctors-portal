import React from 'react'
import doctor from '../../images/5790-removebg.png'
import './MakeAppointment.css'
function MakeAppointment() {
    return (

       <section className="make-appointment mb-5">
           <div className="container ">
               <div className="row">
                   <div className="col-md-5 d-none d-md-block">
<img src={doctor}  alt=""/>
                   </div>
                   <div className="col-md-7 py-5 text-white">
<h5 className="text-uppercase" style={{color:"#1CC7C1"}}>Appointment</h5>
<h1 className="my-4">Make An Appointment</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, facere est, officiis quis, necessitatibus error voluptas quibusdam perspiciatis at voluptates porro. Aliquam, maxime ullam. Fugit tempore ipsam maxime nihil commodi mollitia nam minus perspiciatis voluptatibus minima nisi maiores quos similique, quas culpa, eveniet voluptates distinctio ea nobis saepe provident? Vitae tempora veniam rerum doloribus consequuntur error atque provident pariatur tenetur</p>
<button className="btn btn-primary">Learn More</button>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default MakeAppointment
