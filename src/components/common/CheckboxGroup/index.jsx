import React from 'react'
import './CheckboxGroup.scss'

/**
 * @param {*} props 
 * props: {
 *      dataSource: [
 *          {value: "basketball", label: "篮球"}
 *      ],
 *      chooseDatas: [],
 *      name: "",
 *      onChange: f()
 * }
 */

export default function CheckboxGroup(props) {
    const checkboxes = getGroup(props);
    return (
        <>{checkboxes}</>
    )
}


function handleChange(e, props){
    let arr;
    const { checked, value } = e.target;
    if(checked){
        arr = [...props.chooseDatas, value];
    }else{
        arr = props.chooseDatas.filter(item => item !== value);
    }
    props.onChange(arr, props, e);
}

function getGroup(props){
    return props.dataSource.map(item => (
        <label key={item.value} className="k-checkbox-wrapper">
            <span className={
                props.chooseDatas.includes(item.value) ? "k-checkbox k-checkbox-checked" : "k-checkbox"
            }>
                <input
                    type="checkbox"
                    className="k-checkbox-input"
                    name={props.name}
                    value={item.value}
                    checked={props.chooseDatas.includes(item.value)}
                    onChange={e =>handleChange(e,props)}
                />
                <span className="k-checkbox-inner"></span>
            </span>
            <span className="k-checkbox-text">{item.label}</span>
        </label>
    ));
}