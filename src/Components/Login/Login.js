import React from "react";

import loginimg from "../../images/Group 140.png";
import auth, { provider } from "./firebase";
function Login() {
const signin =() => {
  auth.signInWithPopup(provider)
  .then(res => console.log(res))
  .catch(err => alert("error occured in firebasesignin",err))
}

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 h-70 d-flex flex-column justify-content-center ">
            <div class="card">
              <div class="card-body text-center">
                <h3 class="card-title ">Card title</h3>

                <button
                onClick={signin}
                  className="btn text-white"
                  style={{ backgroundColor: "#1CC7C1" }}
                >
                  Login To Continue
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={loginimg}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
