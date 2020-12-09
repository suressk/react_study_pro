import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
// import Test from './Test'
// import News from "./News"
// import BallList from "./components/RandomBallList/BallList"
// import HaveRest from "./views/haveRest";

// ReactDOM.render(
//     <React.StrictMode>
//         <BallList />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <React.StrictMode>
//         {/* <App /> */}
//         {/* <Test /> */}
//         {/* <News /> */}
//         <HaveRest />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// ===============

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./react-router/matchPath";

function Comp() {
    return <h1>Comp component</h1>
}

function NotFound() {
    return <h1>NotFound</h1>
}

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/comp" exact component={Comp} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
