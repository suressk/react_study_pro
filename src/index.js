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
);
