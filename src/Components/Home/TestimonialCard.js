import React from 'react'


function TestimonialCard({data}) {
    return (
        <div class="card col-md-3  mr-3"  >
        <div class="card-body">
          
    <p class="card-text">{data.des}</p>
         <div className="d-flex align-items-center">
             <div className="">
<img src={data.img} alt=""/>

             </div>
             <div className="">
    <h3>{data.name}</h3>
    <small>{data.location}</small>
             </div>
         </div>
        </div>
      </div>
    )
}

export default TestimonialCard
