import React, {useState} from 'react';

import './database.css';

async function stall(stallTime = 5000) {
    await new Promise(resolve => {
        
        return setTimeout(resolve, stallTime);
    });
    console.log('It will be printed 2-nd with delay');
}

const DataFetch = (props) => {

    let [dataFetched, toggleData] = useState(false);
    let [fetching, showFetching] = useState(true);

    const toggleFetch = async (event) => {
        event.preventDefault();
        showFetching(false);
        await stall();
        props.startSelectorHandler(true);
        showFetching(true);
        toggleData(true);

    }

    return (
        <div class="col-4">
            <div class="dbcoll">
            <div>
                <button type="submit" onClick={toggleFetch} disabled={dataFetched}>Fetch Database</button>
            </div>
            <p class="success" hidden={fetching}>Waiting...</p>
            <p class="success" hidden={!dataFetched}>Connection success</p>
            </div>
        </div>
    )
}

export default DataFetch;