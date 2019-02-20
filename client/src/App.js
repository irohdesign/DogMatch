import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import How from "./pages/How";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/howitworks" component={How} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz/results" component={QuizResults} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/search/results" component={SearchResults} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
