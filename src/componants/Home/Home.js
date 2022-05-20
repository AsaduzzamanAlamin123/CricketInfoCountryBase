import React from 'react';

import './Home.css';
import Sakib from '../../image/360-3608439_shakib-al-hasan-2019-removebg-preview.png'
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
           <div className='intro-section'>
               <div className='text-part'>
                   <h2 className='text'>My <br></br> 
                   <span className='My'>Fancy Cricket </span>
                 <br></br>
                        Mania</h2>
               </div>
               <div className='slider-part'>
             
              <img className='sakib-style' src={Sakib} alt="" />  
               </div>

           </div>

           <div className='carusol-style'>
            <div className='text-partt'>
                <p className='para'>
                Cricket is a bat-and-ball game played between two teams of eleven
                 players each on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, 
                 each comprising two bails balanced on three stumps. The game proceeds when a player on the fielding team,
                  called the bowler, "bowls" (propels) the ball from one end of the pitch towards the wicket at the other end, 
                  with an "over" being completed once they have legally done so six times. The batting side has one player at
                   each end of the pitch, with the player at the opposite end of the pitch from the bowler aiming to strike
                    the ball with a bat. The batting side scores runs either when the ball reaches the boundary of the field, or 
                    when the two batters swap ends of the pitch, which results in one run. The fielding side's aim is to prevent
                     run-scoring and dismiss each batter (so they are "out", and are said to have "lost their wicket"). Means of dismissal
                     include being bowled, when the bowled ball hits the stumps and dislodges the bails, and by the fielding side
                      either catching a hit ball before it touches the ground, or hitting a wicket with the ball before a batter
                       can cross the crease line in front of the wicket to complete a run. When ten batters have been dismissed, the 
                       innings ends and the teams swap roles.
                 The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches.
                </p>

            </div>
            <div className='carusol'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block carusol-pic"
      src="https://cdn.dribbble.com/users/1657247/screenshots/7691679/virat-kohli.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carusol-pic"
      src="https://wallpaperaccess.com/full/1869034.jpg"
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carusol-pic"
src="https://www.telegraph.co.uk/content/dam/cricket/2021/11/04/TELEMMGLPICT000276659717_trans_NvBQzQNjv4BqUTB3vMrBgFH3wkEYGI_sPOcQmKPsPCApjlfbkH9hLl0.jpeg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

            </div>
           </div>
        </div>
    );
};

export default Home;