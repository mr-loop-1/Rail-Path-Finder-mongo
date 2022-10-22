import React, {useState} from 'react';

import DataFetch from '../controllers/database';
// import StationList from '../controllers/Station/stationList';
import CityList from '../controllers/City/CityList';

import './main.css';

const Main = () => {
    
    let [fetchedData,startSelector] = useState(false);

    const startSelectorHandler = (state => {
        startSelector(state);
    })

    const allCities =[
        {
            id: 'ct1',
            name: 'newVice2'
        },
        {
            id: 'ct2',
            name: 'newDelhi'
        }
    ]; 

    return (
        <div>
        <div class="container cont1">
            <div class = "row row1">
                <div class="col-8 text-center">
                <p class="titletext">    
                    Hello there... its Abdul Samad<br />
                    <br />
                    Github username : mr-loop-1<br />
                    This project's repo: React, MERN<br />
                    the Stack: mern<br />
                    accuracy of paths: undergoing<br />
                    </p>
                </div>
                <DataFetch startSelectorHandler={startSelectorHandler} />
            </div>
        </div>
        <div class="container cont2">
            <div class = "row row2">
                { fetchedData && <CityList cities={allCities} /> }

                { fetchedData && 
                    <div class="col-4">
                        <div class="col-path-wrapper">
                        <div class="col-path" id="path-react-portal">

                        </div>
                        </div>
                    </div> 
                }
            </div>
            
        </div>
        </div>  
    );
}

export default Main;