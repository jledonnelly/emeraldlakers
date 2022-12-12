import React from 'react';
import styles from './ImageSlider.module.css';

const Card = ({ image, player }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{player}</p>
    </div>
  );
};

export default Card;