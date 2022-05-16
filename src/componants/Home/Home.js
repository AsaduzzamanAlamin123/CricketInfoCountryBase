import React from 'react';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
           <div className='intro-section'>
               <div>
                   <h2 className=''>My <br></br> 
                   <span>Fancy</span>
                   <br></br>
                       <span>Cricket</span><br></br>
                        Mania</h2>
               </div>
               <div className='slider-part'>
              {/* <Slider></Slider> */}
              {/* <img className='devil' src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/144800/144859.6.jpg" alt="" /> */}
                
               </div>

           </div>
        </div>
    );
};

export default Home;