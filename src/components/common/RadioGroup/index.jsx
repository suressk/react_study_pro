import React, { Component } from 'react'
import propTypes from 'prop-types'
import './RadioGroup.scss'

export default class RadioGroup extends Component {

    static defaultProps = {

    }

    static propTypes = {
        dataSource: propTypes.array,
        name: propTypes.string,
        chooseLove: propTypes.oneOfType([propTypes.string, propTypes.number]), // 类型之一
        score: (props, propName, componentName) => { // 自定义类型验证函数
            // console.log(props, propName, componentName);
            const val = props[propName];
            if(val === undefined || val === null) {
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} is Required`);
            }
            if(typeof val !== "number"){
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} is not a number`);
            }
            if(val < 0 || val > 100){
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} must between 0 and 100`);
            }
        }
    }

    shouldComponentUpdate(nextProps){
        if(
            nextProps.dataSource === this.props.dataSource &&
            nextProps.chooseLove === this.props.chooseLove
        ){
            return false;
        }
        return true;
    }
    state = {}

    static getDerivedStateFromProps(){
        console.log("RadioGroup getDerivedStateFromProps");
        return null;
    }

    handleChange = e  => {
        const val = e.target.value;
        this.props.onChange && this.props.onChange(val, e);
    }

    getRadioGroup(){
        return this.props.dataSource.map(item => (
            <label key={item.value} className="k-radio-wrapper">
                <span className={
                    this.props.chooseLove === item.value ? "k-radio k-radio-checked" : "k-radio"
                }>
                    <input
                        className="k-radio-input"
                        type="radio"
                        name={this.props.name}
                        value={item.value}
                        checked={this.props.chooseLove === item.value}
                        onChange={this.handleChange}
                    />
                    <span className="k-radio-inner"></span>
                </span>
                <span className="k-radio-text">{item.label}</span>
            </label>
        ))
    }


    render() {
        const radioes = this.getRadioGroup();
        return (
            <>
                {radioes}
                <br />
                <br />
                <br />
                自定义类型验证函数: score: {this.props.score}
            </>);
    }
}
