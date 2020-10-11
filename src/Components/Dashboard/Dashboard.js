import React, { useState } from 'react'
import AppoitmentsByDate from './AppoitmentsByDate'
import Sidebar from './Sidebar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const containerstyle ={
    height:"100%", 
    backgroundColor:"#F4FDFB"
}

function Dashboard() {
    const [selecteddate,setSelecteddate] = useState(new Date())
    const handleDateChange =(date) => {
        console.log(date);
        setSelecteddate(date)
            }
    return (
        <div>
        <div style={containerstyle} className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                <Calendar 
        className="border-0"
        onChange={handleDateChange}
        value={new Date()}
        />
                </div>
                <div className="col-md-5">
               <AppoitmentsByDate/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Dashboard
