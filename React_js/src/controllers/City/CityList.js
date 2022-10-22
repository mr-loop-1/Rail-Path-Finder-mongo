import React, { useState } from "react";

import CityItem from "./CityItem";
import StationList from "../Station/stationList";
import Map from "../Map/map";

import "./CityList.css";

const initialCity = "newVice2";

let allStations = [];

const stall = async (stallTime = 1500) => {
    await new Promise(resolve => {
        
        return setTimeout(resolve, stallTime);
    });
    console.log('It will be printed 2-nd with delay');
}

(async () => {
    await fetch(`/stations?city=${initialCity}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            allStations = data.stationsArray;
        });
})();

const CityList = (props) => {
    let [activate, toggleActivate] = useState(false);
    let [currentCity, updateCurrentCity] = useState(initialCity);

    const updateCurrentCityHandler = async (event) => {
        const currCity = event.target.value;
        toggleActivate(true);

        await fetch(`/stations?city=${currCity}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                allStations = data.stationsArray;
            });

        updateCurrentCity((old) => currCity);

        await stall();

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
                        <p class="city-info-text">
                            Selected City: {currentCity}
                        </p>
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
