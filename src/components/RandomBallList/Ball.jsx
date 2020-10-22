import React, { Component } from 'react'
import './Ball.scss'

export default class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed,
            bg: props.bg || "#0fc"
        }
    }

    componentDidMount(){
        this.startMove();
    }

    startMove = () => {
        const duration = 1000 / 60;
        setInterval(() => {
            const disX = this.state.xSpeed / 60,
                disY = this.state.ySpeed / 60;
            let newLeft = this.state.left + disX,
                newTop = this.state.top + disY;
            
            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                });
            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                });
            }
            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                });
            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed
                });
            }
            this.setState({
                left: newLeft,
                top: newTop
            });
        }, duration);
    }

    render() {
        return (
            <div
                className="ball"
                style={{
                    left: this.state.left,
                    top: this.state.top,
                    backgroundColor: this.state.bg
                }}
            >                
            </div>
        )
    }
}
