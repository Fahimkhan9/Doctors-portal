import React from 'react'
import drimg from '../../images/5790-removebg.png'
import DoctorsProfileCard from './DoctorsProfileCard'
const doctorsdata =[
    {
        name:"Dr.Caudi",
        phone:"01823323232",
        img:drimg,
    },
    {
        name:"Dr.Caudi",
        phone:"01823323232",
        img:drimg,
    },

    {
        name:"Dr.Caudi",
        phone:"01823323232",
        img:drimg,
    },
]

function DoctorsProfile() {
    return (
        <section className="doctors-profile mb-5">
            <h5 className="text-center" style={{color:"#1CC7C1"}}>Our Doctors</h5>
            <div className="container">
                <div className="row">
                {
                doctorsdata.map(drdata => <DoctorsProfileCard drdata={drdata}/>)
            }
                </div>
            </div>
           
        </section>
    )
}

export default DoctorsProfile
