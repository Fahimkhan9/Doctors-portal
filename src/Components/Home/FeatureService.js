import React from 'react'
import feature from '../../images/Mask Group 3.png'
function FeatureService() {
    return (
       <section  className="feature-container  d-flex justify-content-center   ">
           <div className="row w-75  ">
               <div className="col-md-5">
                   <img style={{height:"400px"}} src={feature} alt=""/>
               </div>
               <div className="col-md-7 my-auto">
                   <h3>Exceptional Dental Care,on your Terms</h3>
                   < p style={{lineHeight:'2rem'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi nisi amet vero magnam facere repellendus illum, corporis numquam facilis perspiciatis, voluptatem unde exercitationem fugit modi minima, expedita autem possimus. Quasi iste autem laboriosam fugit dolorum magnam architecto officia harum cum voluptas eos quisquam quia voluptate veniam mollitia consectetur id excepturi sed, tenetur magni corrupti reprehenderit maiores? Enim, voluptate autem </p>
                   <button className="btn btn-primary my-auto">Learn More</button>
               </div>
           </div>
       </section>
    )
}

export default FeatureService
