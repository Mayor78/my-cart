import React from 'react'
import '../style/navbar.css'
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     
        <ul>
            <li>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {/* <li>
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            // <li>
            // <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
            // </li>
            // <li>
            // <Link className="nav-link active" aria-current="page" to="/project">Products</Link>
            // </li>
            // <li>
            // <Link className="nav-link active" aria-current="page" to="/More">more</Link>
           
            // </li>  */}
           <li>
           <Link className="nav-link active" aria-current="page" to="/Cart"> <FaCartPlus size={25} className='cart'></FaCartPlus > </Link>
        
           </li>
           
           

        </ul>
    </div>
  )
}

export default Navbar
