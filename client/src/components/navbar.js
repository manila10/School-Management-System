import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
<Link to ={"/"}>Home</Link>
<Link to ={"/user"}>Student Zone</Link>
<Link to ={"/admin"}>Teacher Zone</Link>
<Link to= {"/contact"}>Contact Us </Link>


    </div>
  )
}

export default Navbar