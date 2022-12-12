import React, {useState} from "react";
import styles from './Navigation.module.css'
import {AiOutlineMenu, AiOutlineClose,AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import Logo from '../../images/lakersdark.jpeg'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
const [nav, setNav] = useState(false)
    return (
        <BrowserRouter>
        <header className={styles.navigation}>
            <img src={Logo} alt="/ " /> 
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <Link to='#membership'>
                    <li><a href="#membership">Membership</a></li></Link>
                    <Link to='#info'>
                    <li><a href="#fixtures">Lakers Central</a></li></Link>
                    <Link to='#videos'>
                    <li><a href="#videos">News</a></li></Link>
                    <Link to='#ImageSlider'>
                    <li><a href="#events">Players</a></li></Link>
                    <Link to='#sponsors'>
                    <li><a href="#shop">Sponsors</a></li></Link>
                    <div className="App">

</div>
                </ul>
            </nav>
           </header>
            </BrowserRouter>
        
        
    );
}

export default Navigation;