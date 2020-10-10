import React from 'react'

function BlogCard({blogdata}) {
    return (
        <div class="card  col-md-4 " >
        <div class="card-body">
          {/* <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a> */}
          <div className="d-flex align-items-center">
              <div className="">
                  <img src={blogdata.img} alt=""/>
              </div>
              <div className="">
        <h5>{blogdata.name}</h5>
        <small>{blogdata.time}</small>
              </div>
          </div>

<div className="">
        <h2>{blogdata.title}</h2>
        <p>{blogdata.des}</p>
</div>

        </div>
      </div>
    )
}

export default BlogCard
