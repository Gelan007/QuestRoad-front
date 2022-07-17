import React from 'react';
import s from './MySelect.module.css';

const MySelect = ({defaultName, options, value, onChange}) => {
    return (
        <select
            className={s.select}
            value={value}
            onChange={event => onChange(event.target.value)}>

            <option disabled value='popular' className={s.defaultValue}>{defaultName}</option>
                {options.map((option) =>
                        <option value={option.value} key={option.value}>{option.name}</option>
                    )}
        </select>
    );
};

export default MySelect;