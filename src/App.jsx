// import React, { useState } from "react";

// /**
//  * 函数组件
//  */
// function App() {
//     const [state, setstate] = useState(10);
//     const arr = [1, 2, 3, 4, 5, state];
//     const lis = arr.map((item, i) => (<li key={i}>{item}</li>));
//     const html = "<h2><em>Intalic</em></h2>";
//     return (
//         <>
//             <h1>Hello React</h1>
//             <p onClick={() => {
//                 setstate(state+10)
//             }}>Atom Rename</p>
//             <ul>
//                 {lis}
//                 <li dangerouslySetInnerHTML={{
//                     __html: html
//                 }} />
//             </ul>
//         </>
//     )
// }

// export default App;

import React, { Component } from 'react'
import Pager from './components/common/Pager'
import CheckboxGroup from './components/common/CheckboxGroup'
import RadioGroup from './components/common/RadioGroup'
import Progress from './components/common/Progress'

// const cb = <CheckboxGroup/>
// console.log(cb);

export default class App extends Component {
    state = {
        current: 1,
        total: 100,
        pageSize: 10,
        showNums: 5,
        dataSource: [
            { label: '爱情', value: '0' },
            { label: '友情', value: '1' },
            { label: '亲情', value: '2' },
            { label: '有钱', value: '3' },
            { label: '其他', value: '4' },
        ],
        chooseDatas: ['3'],
        chooseLove: "3"
    }
    toPage = page => {
        this.setState({
            current: page
        });
    }
    onChange = newArr => {
        this.setState({
            chooseDatas: newArr
        })
    }
    changeLove = val => {
        this.setState({
            chooseLove: val
        })
    }

    render() {
        return (
            <div>
                <Pager {...this.state} toPage={this.toPage} />
                <br/>
                <br/>
                <CheckboxGroup
                    dataSource={this.state.dataSource}
                    chooseDatas={this.state.chooseDatas}
                    name="loves"
                    onChange={this.onChange}
                />
                <br/>
                <br/>
                <RadioGroup
                    dataSource={this.state.dataSource}
                    chooseLove={this.state.chooseLove}
                    name="love"
                    score={50}
                    onChange={this.changeLove}
                />
                <br/>
                <br/>
                <Progress active bg="#008c8c" />
                <br/>
                <br/>
            </div>
        )
    }
}
