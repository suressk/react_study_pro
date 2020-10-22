import React, { Component } from 'react'
import Ball from './Ball'
import { getRandomNum } from '../../utils/randomNum'

export default class BallList extends Component {

    constructor(props){
        super(props);
        this.state = {
            infoes: []
        }
        this.timer = null;
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            const info = {
                left: getRandomNum(0, document.documentElement.clientWidth - 100),
                top: getRandomNum(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandomNum(-300, 300),
                ySpeed: getRandomNum(-300, 300),
                bg: `rgb(${getRandomNum(0, 255)}, ${getRandomNum(0, 255)}, ${getRandomNum(0, 255)})`
            }
            this.setState({
                infoes: [...this.state.infoes, info]
            });
            if (this.state.infoes.length >= 10) {
                clearInterval(this.timer);
            }
        }, 1000)
    }

    render() {

        let balls = this.state.infoes.map((item, idx) => (<Ball key={idx} {...item} />));
        return (
            <div>
                {balls}
            </div>
        )
    }
}
