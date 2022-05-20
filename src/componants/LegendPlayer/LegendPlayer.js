import React, { useEffect, useState } from 'react';
import SingleLegend from '../SingleLgened/SingleLegend';
import './LegendPlayer.css';

const LegendPlayer = () => {
    const [legends ,  setLegends] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setLegends(data))
    },[])

    return (
        <div>
            <h4 className='full-legend-string'>Our <span className='ccri'>Cricket</span> <span className='lleg'>Legend</span>: {legends.length}</h4>
            <div className='legend-full'>
                {
                    legends.map(legend => <SingleLegend key={legend.id} legend={legend}></SingleLegend>)
                }
            </div>

        </div>
    );
};

export default LegendPlayer;