import React from 'react';

const CityItem = (props) => {

    return (
        <option key={props.city.id} value={props.city.name}>{props.city.name}</option>
    )
}

export default CityItem;