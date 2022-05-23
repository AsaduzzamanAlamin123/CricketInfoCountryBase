import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SingleCountry.css';

const SingleCountry = (props) => {
    const {pictureflag , namecountry , champion , about , id} = props.tm
    // const navigate = useNavigate();
    // const showFriendDetail  = ()=>{
    //    navigate('/singleCountry/' +  id)

    // }
    console.log(props.tm);
   
    return (
         <Link to={'/singleCountry/' +  id}>
        <div className='card-style'>
           
            
           <img className='flag-style' src={pictureflag} alt="" />
           
           {/* <button onClick={showFriendDetail}>Shoe detail</button> */}
           
          {/* eikhane je je part comment kora ache oitukt button dia detail dekar jonno */}
       </div>
         </Link>
    );
};

export default SingleCountry;