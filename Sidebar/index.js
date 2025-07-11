import './index.scss'
import { Link, NavLink } from 'react-router-dom'

import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/swati.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Sidebar =()=>(
    <div className='nav-bar'>
        <Link className="logo" to="/">
        <img src={LogoS} alt="logo"/>
         <img className="sub-logo" src={LogoSubtitle} alt="swati"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
             <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-Link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/swati-gupta-9a9a4028a">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>

            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/swati99gup">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>

            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="www.youtube.com/@swatigupta180
">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                        </a>

            </li>

        </ul>
    </div>
)

export default Sidebar