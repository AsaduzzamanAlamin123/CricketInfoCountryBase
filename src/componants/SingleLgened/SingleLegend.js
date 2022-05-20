import React from 'react';
import './SIngleLegend.css';

const SingleLegend = (props) => {
    console.log(props.legend);
    const {agelegend , aboutlegend , namelegend , picturelegend} = props.legend
    
    return (
        <div>
           <img className='lgd-pic' src={picturelegend} alt="" />
           <h4>{namelegend}</h4>
           <h4>Age: {agelegend}</h4>
           <p>{aboutlegend}</p>
        </div>
    );
};

export default SingleLegend;