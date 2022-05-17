import React from 'react';
import Slider from '../Slider/Slider';
import './Home.css';
import Sakib from '../../image/360-3608439_shakib-al-hasan-2019-removebg-preview.png'

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
              {/* <Slider></Slider> */}
              {/* <img className='devil' src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/144800/144859.6.jpg" alt="" /> */}
              <img className='sakib-style' src={Sakib} alt="" />  
               </div>

           </div>
        </div>
    );
};

export default Home;