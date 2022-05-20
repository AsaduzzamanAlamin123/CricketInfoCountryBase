import React from 'react';
import './SIngleLegend.css';

const SingleLegend = (props) => {
    console.log(props.legend);
    const {agelegend , aboutlegend , namelegend , picturelegend} = props.legend
    
    return (
        <div className='single-lgd'>
           <img className='lgd-pic' src={picturelegend} alt="" />
           <h4 className='name'>{namelegend}</h4>
           <h4 className='name'>Age: {agelegend}</h4>   
           <p>{aboutlegend}</p>
        </div>
    );
};

export default SingleLegend;