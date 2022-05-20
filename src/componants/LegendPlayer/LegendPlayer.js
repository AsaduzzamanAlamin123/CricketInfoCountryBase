import React, { useEffect, useState } from 'react';

const LegendPlayer = () => {
    const [legend ,  setLegend] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setLegend(data))
    },[])

    return (
        <div>
            <h4>legend player</h4>
        </div>
    );
};

export default LegendPlayer;