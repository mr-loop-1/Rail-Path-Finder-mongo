import React, { useState } from 'react';
import './CalcBtn.css';

import Path from '../Path/Path'

let firstTime = false;

const CalcBtn = (props) => {

    // let sowMsg = false;
    let[path, updatePath] = useState([]);

    const BtnHandler = async (event) => {
        
        // sowMsg = true;
        props.tgl(true);
        console.log(props.city, " ", props.stations[0], " ", props.stations[1]);

        await fetch(`http://localhost:4100/path?city=${props.city}&st1=${props.stations[0]}&st2=${props.stations[1]}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.toPath);
            updatePath(old => data.pathArray);
            console.log(path);
            firstTime = true;
        })
        props.tgl(false);
        

    }

    return (
        <div>
        <div class="btnCenter">
            <button type="submit" onClick={BtnHandler} disabled={props.disabled}>Calculate</button>
            <text class="calc-trigger" hidden={!props.disabled}>Calculating...</text>
        </div>    
        {firstTime && <Path path={path} />}
        </div>
    )
}

export default CalcBtn;