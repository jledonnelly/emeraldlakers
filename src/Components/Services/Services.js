import React from 'react';
import { FaBasketballBall, FaShoppingBasket, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Services.modules.css";
import { faBasketballBall, faCalendar, faEnvelope, faImages, faMailBulk, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <section class="info-area" id="info">
    <h3 class="header-text">Get Your Lakers Fix!</h3>
    <p>Check out all the news, events and latest merchandise now</p>
    <div class="content-area">
        <div class="single-info" id='services'>
            <div class="icon-area">
            <i><button class="btn"><FontAwesomeIcon icon={faBasketballBall}/></button></i>
            </div>
            <h2>NBL Fixtures & Results</h2>
            <p><a href="https://nbl.com.au/">Official Site of the NBL</a></p>
        </div>
        
        <div class="single-info">
            <div class="icon-area">
                <i><button class="btn"><FontAwesomeIcon icon={faCalendar}/></button></i>
            </div>
            <h2>Upcoming Events</h2>
            <p>Lakers events coming soon!</p>
        </div>
        <div class="single-info">
            <div class="icon-area">
            <i><button class="btn"><FontAwesomeIcon icon={faShoppingBasket}/></button></i>
            </div>
            <h2>Lakers Shop</h2>
            <p>Lakers merchandise - <br></br><a href="https://www.shopify.com">Links to external site</a></p>
        </div>
    </div>
   </section> 
    )
}

export default Services