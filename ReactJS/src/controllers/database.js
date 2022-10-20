import React, {useState} from 'react';

import './database.css';

const DataFetch = (props) => {

    let [dataFetched, toggleData] = useState(false);

    const toggleFetch = (event) => {
        event.preventDefault();
        props.startSelectorHandler(true);
        toggleData(true);
    }

    return (
        <div class="col-4">
            <div class="dbcoll">
            <div>
                <button type="submit" onClick={toggleFetch} disabled={dataFetched}>Fetch Database</button>
            </div>
            <text class="success" hidden={!dataFetched}>Connection success</text>
            </div>
        </div>
    )
}

export default DataFetch;