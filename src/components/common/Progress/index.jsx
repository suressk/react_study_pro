import React, { PureComponent } from 'react'
import './progress.scss'

// const ctx = React.createContext();

export default class Progress extends PureComponent {

    static defaultProps = {
        bg: "rgb(3, 169, 244)", // background-color
        size: "normal", // small / normal / big
    }

    state = {
        progress: 0
    }

    timer = null
    
    componentDidMount() {
        this.timer = setInterval(() => {
            if(this.state.progress <= 100){
                this.setState({
                    progress: this.state.progress + 2
                });
            }else{
                clearInterval(this.timer);
            }
        }, 200);
    }
    

    render() {
        return (
            <>
                <div className="progress">
                    <div
                        className={
                            this.props.active ? "progress-bar active" : "progress-bar"
                        } style={{
                            backgroundColor: this.props.bg
                        }}
                    >
                    </div>
                </div>
                <div className="pro" style={{
                    backgroundImage:'linear-gradient(to right,#C0C7CB 0%,#C0C7CB '+ this.state.progress +'%,#E1E6E9 '+ this.state.progress +'%,#E1E6E9 100%)'
                }}>
                </div>
            </>
        )
    }
}
