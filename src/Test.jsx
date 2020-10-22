import React, { Component } from 'react'

export default class App extends Component{
    constructor(props){
        super(props);
        console.log(1, "App constructor");
    }
    static getDerivedStateFromProps(){
        console.log(2, "App getDerivedStateFromProps");
        return null; // 不对 state 进行任何操作
    }
    state = {}
    componentDidMount(){
        console.log(8, "App componentDidMount");
    }
    render(){
        console.log(3, "App render");
        return (
            <div>
                <Comp />
            </div>
        )
    }
}

class Comp extends Component{
    constructor(props){
        super(props);
        console.log(4, "Comp constructor");
    }
    state = {}
    static getDerivedStateFromProps(){
        console.log(5, "Comp getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log(7, "Comp componentDidMount");
    }
    render(){
        console.log(6, "Comp render");
        return (
            <div>
                <h1>title</h1>
            </div>
        )
    }
}