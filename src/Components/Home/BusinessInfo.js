import React from 'react'
import InfoCard from './InfoCard'
import {faClock,faMapMarker,faPhone} from '@fortawesome/free-solid-svg-icons'
const infosdata =[
    {
    title:"Opening Hours",
    des:"We are open seven days",
    icon:faClock,
    bgcolor:"primary"
},
{
    title:"Visit Our Location",
    des:"Brooklyn New York",
    icon:faMapMarker,
    bgcolor:"dark"
}, {
    title:"Call us now",
    des:"+01812-212212",
    icon:faPhone,
    bgcolor:"primary"
},

]

function BusinessInfo() {
    return (
        <section className="d-flex justify-content-center">
          <div className="w-75 row">
          {
                infosdata.map(info => <InfoCard info={info}/>)
            }
          </div>
        </section>
    )
}

export default BusinessInfo
