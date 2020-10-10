import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <section className="footer">
            <div className="row d-flex justify-content-center">
                <div className="col-md-3 ">
                <h5 style={{color:"#1CC7C1"}}>Links</h5>
                    <ul class="list-group">
                  
  <li class="list-group-item  border-0">Cras justo odio</li>
  <li class="list-group-item  border-0">Dapibus ac facilisis in</li>
  <li class="list-group-item  border-0">Morbi leo risus</li>
  <li class="list-group-item  border-0">Porta ac consectetur ac</li>
  <li class="list-group-item  border-0">Vestibulum at eros</li>
</ul>
                </div>
                <div className="col-md-3 ">
                <h5 style={{color:"#1CC7C1"}}>Services</h5>
                    <ul class="list-group">
                  
  <li class="list-group-item  border-0">Cras justo odio</li>
  <li class="list-group-item  border-0">Dapibus ac facilisis in</li>
  <li class="list-group-item  border-0">Morbi leo risus</li>
  <li class="list-group-item  border-0">Porta ac consectetur ac</li>
  <li class="list-group-item  border-0">Vestibulum at eros</li>
</ul>
                    </div>
                    <div className="col-md-3">
                    <h5 style={{color:"#1CC7C1"}}>Oral Health</h5>
                    <ul class="list-group">
  <li class="list-group-item  border-0">Cras justo odio</li>
  <li class="list-group-item  border-0">Dapibus ac facilisis in</li>
  <li class="list-group-item  border-0">Morbi leo risus</li>
  <li class="list-group-item  border-0">Porta ac consectetur ac</li>
  <li class="list-group-item  border-0">Vestibulum at eros</li>
</ul>
                    </div>

                    <div className="col-md-3">
                    <h5 style={{color:"#1CC7C1"}}>Our  Address</h5>
                    <ul class="list-group">
  <li class="list-group-item  border-0">New york</li>
 
  <li class="list-group-item  border-0">Morbi leo risus</li>
  <li class="list-group-item  border-0">Porta ac consectetur ac</li>
  <li class="list-group-item  border-0">Vestibulum at eros</li>
</ul>
                    </div>
            </div>
           
                <div className="text-center">
    <h4>Copyright-{(new Date()).getFullYear()},All rights reserved</h4>
                </div>
          
        </section>
    )
}

export default Footer
