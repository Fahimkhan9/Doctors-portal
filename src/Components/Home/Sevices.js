import React from 'react'
import fluorid from '../../images/001-dental.png'
import cavity from '../../images/tooth (1).png'
import whitening from '../../images/tooth.png'
import ServiceDetail from './ServiceDetail'
 
const servicedata =[
    {
        name:"Fluorid Treatment",
        img:fluorid,
        des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, qui."
    },
    {
        name:"Cavity Filling",
        img:cavity,
        des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, qui."
    },
    {
        name:"Teath Whitening",
        img:whitening,
        des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, qui."
    },
]

function Sevices() {
    return (
       
       <section className="services-container mt-5">
    <div className="text-center">
    <h5 style={{color:"#1CC7C1"}}>Our Sevices</h5>
           <h2 style={{color:"#3A4256"}}>Services We Provide</h2>
    </div>
    <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
          {
                servicedata.map(service => <ServiceDetail service={service}/>)
            }
          </div>
        </div>
       </section>
    )
}

export default Sevices
