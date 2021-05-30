import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div style={{'position':'sticky','top':'0px','z-index':'3','backgroundColor':'white'}} >
            <h1 style={{'text-align':'center'}}>Company Logo</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" style={{'justify-content': 'center'}}>
      <ul class="navbar-nav">
        <li class="nav-item px-5">
          <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item px-5">
          <Link class="nav-link" to="/Products">Our Products</Link>
        </li>
        <li class="nav-item px-5">
          <Link class="nav-link" to="/AboutUs">About Us</Link>
        </li>
        <li class="nav-item px-5">
          <Link class="nav-link" to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
