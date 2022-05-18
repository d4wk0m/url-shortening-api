import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

function Footer() {
  return (
    <footer>
        <div className="container-sm">
            <h2>Shortly</h2>
            <div className="card-group">
                <div className="card">
                    <h3>Features</h3>
                    <ul>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Link Shortening</a></li>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Branded Links</a></li>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Analytics</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Blog</a></li>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Developers</a></li>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Support</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">About</a></li>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Our Team</a></li>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Careers</a></li>
                        <li><a href="https://github.com/d4wk0m" rel="noreferrer" target="_blank">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="icons">
                <img src={facebook} alt="Facebook Icon" />
                <img src={twitter} alt="Twitter Icon" />
                <img src={pinterest} alt="Pinterest Icon" />
                <img src={instagram} alt="Instagram Icon" />
            </div>
        </div>
    </footer>
  )
}

export default Footer