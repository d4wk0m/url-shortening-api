import React from 'react'
import logo from "../images/logo.svg"

function Menu() {
    function menuToggle(e){
        e.currentTarget.classList.toggle('is-active')
        var navbar = document.getElementById('navbar')
        navbar.classList.toggle('active')
    }
    

    return (
        <header className="menu-wrapper container-sm">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="hamburger" id="hamburger" onTouchStart={(e) => menuToggle(e)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="menu container-sm" id="navbar">
                <nav>
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Resources</a></li>
                    </ul>
                </nav>
                <div className="account-buttons">
                    <button className='login'>Login</button>
                    <button className='signup'>Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Menu