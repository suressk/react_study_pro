import React, { Component } from 'react'

export default class News extends Component {
    state = {
        count: 10
    }
    render() {
        return <div>
            <Content count={this.state.count}/>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }}>+</button>
        </div>
    }
}



class Content extends Component {

    state = {
        count: 0
    }

    static getDerivedStateFromProps(nextProps, preState) {
        console.log("getDerivedStateFromProps");
        const { count } = nextProps;
        if (count !== preState.count) {
            return {
                count
            }
        }
        return null;
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

