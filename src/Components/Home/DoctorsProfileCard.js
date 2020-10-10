import React from "react";

function DoctorsProfileCard({ drdata }) {
  return (
    <div className="card border-0 col-md-4 text-center ">
      <div className="card-body ">
        <img style={{ height: "200px" }} src={drdata.img} alt="" />

     <h4>{drdata.name}</h4>
        <b>{drdata.phone}</b>
      </div>
    </div>
  );
}

export default DoctorsProfileCard;
