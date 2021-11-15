import React from 'react';
import '../index.css';
const Boutton = (props) => {
    return (
            <button type={props.type} className={props.classname} value={props.value} onClick={props.onclick}>{props.name}</button>
    );
};

export default Boutton;
