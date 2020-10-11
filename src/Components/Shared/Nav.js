import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props) {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light ">
  <NavLink class="navbar-brand" to="/">Navbar</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink class="nav-link mr-5" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link mr-5" to="/">About</NavLink>
      </li>
      
      <li class="nav-item">
        <NavLink class="nav-link mr-5" to="/" >Dental Services</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class={`nav-link mr-5 ${props.color}`} to="/" >Reviews</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class={`nav-link mr-5 ${props.color}`} to="/">Blog</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class={`nav-link mr-5 ${props.color}`}to="/" >Contact us</NavLink>
      </li>
    </ul>
    
  </div>
</nav>  
        </div>
    )
}

export default Nav
