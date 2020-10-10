import React from 'react'
import chair from '../../images/Mask Group 1.png'
function HeaderMain() {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
<div className="col-md-4 offset-md-1">
<h1 sstyle={{color:"#3A4256"}}>Your new smile <br/> starts here</h1>
<p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum, dicta sunt ab non placeat.</p>
<button className="btn btn-primary text-uppercase">Get Appointment</button>
</div>
<div className="col-md-6">
    <img src={chair} alt="" className="img-fluid"/>
</div>
        </main>
    )
}

export default HeaderMain
