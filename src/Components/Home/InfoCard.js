import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './InfoCard.css'
function InfoCard({info}) {
    return (
        <div className="col-md-4 info-card">
                <div className={`d-flex justify-content-center info-container info-${info.bgcolor} text-white`} >
           <div className="mr-3">
                <FontAwesomeIcon  className="info-icon" icon={info.icon}/>
            </div>
            <div className="">
    <h6>{info.title}</h6>
    <small>{info.des}</small>

            </div>
           </div>
        </div>
    )
}

export default InfoCard
