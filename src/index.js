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

<<<<<<< HEAD
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
=======
import "./react-router/matchPath";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

function News() {
  return <h1>News</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavLink to="/news/user/5">News</NavLink>
      <Route path="/news/:id/:page" component={News} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 89971676d7705ea825267761e12a14ea6a6d5136
);
