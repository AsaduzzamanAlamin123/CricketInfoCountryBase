import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';

const CriketTeam = () => {
    const [team , setTeam] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    },[])

    return (
        <div>
            <h2>team: {team.length}</h2>
            <div>
                {
                    team.map(tm =><SingleCountry key={tm.id} tm={tm}></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default CriketTeam;