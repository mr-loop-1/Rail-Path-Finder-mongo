import React from 'react';
import './map.css';
const Map = (props) => {
    const path = `/maps/${props.city}.jpg`
    console.log(path);
    return <img className="mapimg" src={path} alt="city img" />
}

export default Map;
