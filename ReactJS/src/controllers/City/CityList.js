import React, { useState } from "react";

import CityItem from "./CityItem";
import StationList from "../Station/stationList";
import Map from "../Map/map";

import "./CityList.css";

const initialCity = "newVice2";

let allStations = [];

(async () => {
    await fetch(`http://localhost:4100/ida?city=${initialCity}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            allStations = data.toFill;
        });
})();

const CityList = (props) => {
    let [activate, toggleActivate] = useState(false);
    let [currentCity, updateCurrentCity] = useState(initialCity);

    const updateCurrentCityHandler = async (event) => {
        const currCity = event.target.value;
        toggleActivate(true);

        await fetch(`http://localhost:4100/ida?city=${currCity}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                allStations = data.toFill;
            });

        updateCurrentCity((old) => currCity);

        toggleActivate(false);
    };

    return (
        <div class="col-8">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="city-info">
                        <select
                            name="cities"
                            id="cityPicker"
                            class="coll"
                            onChange={updateCurrentCityHandler}
                            disabled={activate}
                        >
                            {props.cities.map((city) => {
                                return <CityItem city={city} />;
                            })}
                        </select>
                        <text class="city-info-text">
                            Selected City: {currentCity}
                        </text>
                        </div>
                    </div>
                </div>

                <StationList
                    key={currentCity}
                    city={currentCity}
                    stations={allStations}
                    disabled={activate}
                    tgl={toggleActivate}
                />
            </div>

            <Map city={currentCity} />
        </div>
    );
};

export default CityList;
