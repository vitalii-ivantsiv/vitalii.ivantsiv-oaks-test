import React from "react";

import './index.css';

type CheckBoxProps = {
    label: string;
    value: string | number;
    isChecked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox({label, value, isChecked, onChange}: CheckBoxProps) {
    return (
        <label className='checkbox'>
            <input type="checkbox" checked={isChecked} id={label} value={value} onChange={onChange}/>
            <span className="label">{label}</span>
        </label>
    )
}