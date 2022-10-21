import React, { useState } from "react";
import CalcBtn from "../CalculateBtn/CalcBtn";

import StationItem from "./stationItem";

import "./stationList.css";

const StationList = (props) => {
    const [stations, updateStations] = useState([
        props.stations[0],
        props.stations[0],
    ]);

    // console.log("stations, ", props.stations);
    console.log(stations);
    // let station1 = props.stations[0], station2 = props.stations[0];

    const stationChangeHandler = (event) => {
        console.log(stations);
        const newStation = event.target.value;
        if (event.target.id === "stationPicker-1") {
            updateStations((oldStations) => [newStation, oldStations[1]]);
        } else if (event.target.id === "stationPicker-2") {
            updateStations((oldStations) => [oldStations[0], newStation]);
        }
        event.target.value = newStation;
    };

    return (
        <React.Fragment>
            <div class="row">
                <div class="col">
                    <div class="conn1">
                    <select
                        name="stations"
                        class="st"
                        id="stationPicker-1"
                        onChange={stationChangeHandler}
                        disabled={props.disabled}
                    >
                        {props.stations.map((station) => {
                            return <StationItem station={station} />;
                        })}
                    </select>
                    <div class="st-info-text-wrap">
                        <text class="st-info-text">
                            Origin: {stations[0]}
                        </text>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="conn2">
                    <select
                        name="stations"
                        class="st"
                        id="stationPicker-2"
                        onChange={stationChangeHandler}
                        disabled={props.disabled}
                    >
                        {props.stations.map((station) => {
                            return <StationItem station={station} />;
                        })}
                    </select>
                    <div class="st-info-text-wrap">
                        <text class="st-info-text">
                            Destination: {stations[1]}
                        </text>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <CalcBtn
                    city={props.city}
                    stations={stations}
                    disabled={props.disabled}
                    tgl={props.tgl}
                />
            </div>
        </React.Fragment>
    );
};

export default StationList;
