import React from 'react';

const SingleCountry = (props) => {
    console.log(props.tm);
    const {pictureflag , namecountry , champion , about} = props.tm
    return (
        <div>
           
            <h2>{namecountry}</h2>
            <img src={pictureflag} alt="" />
        </div>
    );
};

export default SingleCountry;