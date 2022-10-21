import React from 'react';

const StationItem = (props) => {
    return (
        <option key={Math.random()+100} value={props.station}>{props.station}</option>
    )
}

export default StationItem;