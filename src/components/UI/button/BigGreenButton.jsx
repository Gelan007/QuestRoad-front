import React from 'react';
import s from "./Buttons.module.css";
const BigGreenButton = (props) => {
    return (
        <button className={s.greenBtn} {...props}>

        </button>
    );
};

export default BigGreenButton;