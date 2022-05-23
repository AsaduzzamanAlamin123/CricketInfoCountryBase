import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryId} = useParams()
    const [detailes , setDetailes] = useState({})
    useEffect(()=>{
        const url = `http://localhost:3000/singleCountry/${countryId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setDetailes(data))

    },[])
    return (
        <div>
            <h2>This is detail of a country : {countryId}</h2>
        </div>
    );
};

export default CountryDetail;