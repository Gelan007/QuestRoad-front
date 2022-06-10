import React from 'react';
import s from "./YellowInput.module.css";

const YellowInput = (props) => {
    return (
        <input className={s.yellowInput} {...props}/>
    );
};

export default YellowInput;