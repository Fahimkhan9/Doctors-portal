import React from 'react'
import img from '../../images/Ellipse 1.png'
import BlogCard from './BlogCard'
const blogdata = [
    {
        img:img,
        name:"Dr. Rashed Kabir",
        time:"22 Aug 2020",
        title:"Check at least a doctor  in year for your teeth",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis vitae accusantium necessitatibus culpa dicta libero dignissimos eaque minus corrupti"
    },
    {
        img:img,
        name:"Dr.Caudi",
        time:"3 Sep 2020",
        title:"2 times of brush in a day can keep a healthy",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis vitae accusantium necessitatibus culpa dicta libero dignissimos eaque minus corrupti"
    },
    {
        img:img,
        name:"Dr.John Mitchel",
        time:"1 Oct 2020",
        title:"The tooth cancer is taking a challenge",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis vitae accusantium necessitatibus culpa dicta libero dignissimos eaque minus corrupti"
    },
]

function Blog() {
    return (
       <section className="blog-section mb-5">
       <div className="container">
        <div className="text-center">
            <h5 style={{color:"#1CC7C1"}}>Our Blog</h5>
            <h2>From Our Blog News</h2>
        </div>
        <div className="row d-flex justify-content-center ">
         
               {
                   blogdata.map(blogdata => <BlogCard blogdata={blogdata}/>)
               }
          
        </div>
       
       </div>
       </section>
    )
}

export default Blog
