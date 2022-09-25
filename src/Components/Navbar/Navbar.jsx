import React from 'react'
import './Navbar.css'
import { FaCat } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';




function Navbar() {
    return (
        <div className='containerw'>

            <img src="assets/greenlogo.png" alt="" className='logo-img' />
            <input id='jj' class="search" type="text" placeholder="Search for pets..." /><GoSearch id='search-icon' />
            <a> <button className='btnzz'>LOGIN</button></a>

            <h6 className='nav-text'>Become a Seller</h6>
            <FaCat id='cart' />

            <h6 className='nav-text3'>Abhi</h6>

        </div>
    )
}

export default Navbar