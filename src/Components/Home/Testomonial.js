import React from "react";
import person1 from '../../images/Ellipse 1.png'
import person2 from '../../images/Ellipse 2.png'
import person3 from '../../images/Ellipse 3.png'
import TestimonialCard from "./TestimonialCard";
const testimonialdata = [
  {
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident dolorem voluptas illum rem a dolore ea sapiente pariatur veritatis quidem culpa, neque aut debitis cum animi, sint quo vitae adipisci! Culpa placeat officiis, dolor sint eligendi cupiditate quod temporibus.",
    name: "Winson Harry",
    img: person1,
    location: "California",
  },
  {
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident dolorem voluptas illum rem a dolore ea sapiente pariatur veritatis quidem culpa, neque aut debitis cum animi, sint quo vitae adipisci! Culpa placeat officiis, dolor sint eligendi cupiditate quod temporibus.",
    name: "David watson",
    img: person2,
    location: "New york",
  },
  {
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident dolorem voluptas illum rem a dolore ea sapiente pariatur veritatis quidem culpa, neque aut debitis cum animi, sint quo vitae adipisci! Culpa placeat officiis, dolor sint eligendi cupiditate quod temporibus.",
    name: "Ema Watson",
    img: person3,
    location: "Boston",
  },
];

function Testomonial() {
  return (
    <section className="testimonial mb-5">
      <div className="container">
        <h5 style={{ color: "#1CC7C1" }}>Testimonial</h5>
        <h2>What Our Clients Says</h2>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
          {
              testimonialdata.map(data => <TestimonialCard data={data} />)
          }
      </div>
    </section>
  );
}

export default Testomonial;
