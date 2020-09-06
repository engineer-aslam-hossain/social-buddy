import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import SinglePost from "./components/SinglePost/SinglePost";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <Posts />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/single_post/:postId"}>
            <SinglePost />
          </Route>
          <Route path={process.env.PUBLIC_URL + "*"}>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
