import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCountry.css';

const SingleCountry = (props) => {
    console.log(props.tm);
    const {pictureflag , namecountry , champion , about} = props.tm
    return (
        <Link to='/'>
        <div className='card-style'>
           
            
           <img className='flag-style' src={pictureflag} alt="" />
           {/* <h2>{namecountry}</h2> */}
           {/* <h4>world cup champion:{ champion}</h4> */}
           {/* <h4>{about}</h4> */}
           
          
       </div>
        </Link>
    );
};

export default SingleCountry;