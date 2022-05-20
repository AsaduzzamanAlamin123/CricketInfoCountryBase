import React from 'react';
import './About.css';
import play from '../../image/play.png'

const About = () => {
    return (
        <div className='about-styl'>
            
            <div className='sect'>
                <div className='about-text'>
                    <h2 className='about-t'>About Our Cricket World</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                         Animi eaque rem unde  
                         </p>

                </div>
                <div className='about-img'>
                    <img src={play} alt="" />

                </div>
            </div>
        </div>
    );
};

export default About;