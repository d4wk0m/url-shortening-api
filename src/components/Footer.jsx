import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

function Footer() {
  return (
    <footer>
        <h2>Shortly</h2>
        <div className="card-group">
            <div className="card">
                <h3>Features</h3>
                <ul>
                    <li><a href="#">Link Shortening</a></li>
                    <li><a href="#">Branded Links</a></li>
                    <li><a href="#">Analytics</a></li>
                </ul>
            </div>
            <div className="card">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div className="card">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="icons">
            <img src={facebook} alt="Facebook Icon" />
            <img src={twitter} alt="Twitter Icon" />
            <img src={pinterest} alt="Pinterest Icon" />
            <img src={instagram} alt="Instagram Icon" />
        </div>
    </footer>
  )
}

export default Footer