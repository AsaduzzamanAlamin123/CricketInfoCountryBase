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