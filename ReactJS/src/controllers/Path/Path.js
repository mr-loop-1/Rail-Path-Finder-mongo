import React from 'react';
import * as ReactDOM from 'react-dom';

import './Path.css';

const Path = (props) => {

    console.log("here" ,props.path)

    const listPath = <ul>{props.path.map(st => {
        return <li>{st}</li>
    })}</ul>;

    return ReactDOM.createPortal(
        listPath, document.getElementById("path-react-portal")
    )
}

export default Path;