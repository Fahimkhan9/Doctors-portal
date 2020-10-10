import React from 'react'
import './Contact.css'
function Contact() {
    return (
     <section className="contact p-3 ">
<div className="container">
    <div className="text-center">
        <h5 className="text-uppercase" style={{color:"#1CC7C1"}}>Contact us</h5>
        <h2>Always Connect to us</h2>
    </div>
   <div className="w-75 mx-auto">
   <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address*</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Subject*</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Your message*</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="your message" rows="10"></textarea>
  </div>
  <button className="btn btn-primary text-uppercase ">Submit</button>
</form>
   </div>
  

</div>
     </section>
    )
}

export default Contact
