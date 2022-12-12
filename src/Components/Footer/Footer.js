import React from "react";
import styles from './Footer.module.css';
import Logo from '../../images/lakersdark.jpeg';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
            <img src={Logo} alt="/" />
            <Container>
                <h1 className="text-center">Connect with us on Social Media</h1>
                <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
                    <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </div>
            </Container>

            </div>
            <div>
            <small>&copy; 2022 Emerald Lakers Basketball Club<br></br>Phone: 03 9999 9999<br></br>Email: info@emeraldlakers.com<br></br>123 Main Street Emerald 3182<br></br></small></div>
        </div>
    );
};

export default Footer;