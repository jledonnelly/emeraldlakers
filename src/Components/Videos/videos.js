import React from "react"
import styles from './videos.modules.css'
import ReactPlayer from "react-player";
const Videos = () => {
    return (
        <div className="container" id='videos'>
        <div className={styles.heading}>
        <h1>Check Out Our Newest Recruits!</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Interviews with the top Lakers draft picks</span>
          </p>
       <div className='player-wrapper'>
        <ReactPlayer 
        className='react-player'
        url='https://www.youtube.com/embed/NpEaa2P7qZI' />
         <ReactPlayer 
        className='react-player'
        url='https://www.youtube.com/embed/NpEaa2P7qZI' />
         <ReactPlayer 
        className='react-player'
        url='https://www.youtube.com/embed/NpEaa2P7qZI' />
        
    </div>
    </div>
      </div>
      </div>
    );
};
export default Videos;