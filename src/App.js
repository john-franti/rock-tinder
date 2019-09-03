import React from "react";
import "./App.css";
import "./assets/lumen.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Dig from "./components/Dig";
import Matches from "./components/Matches";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MOCK_ROCKS from "./mock";

class App extends React.Component {
  state = {
    myRocks: [],
    allRocks: []
  };

  componentDidMount() {
    this.setState({ allRocks: MOCK_ROCKS.rocks });
  }

  likeRock = myRock => {
    this.setState(prevState => {
      return {
        myRocks: [...prevState.myRocks, myRock],
        allRocks: prevState.allRocks.filter(rock => myRock !== rock)
      };
    });
  };
  dislikeRock = myRock => {
    this.setState(prevState => {
      return {
        allRocks: prevState.allRocks.filter(rock => myRock !== rock)
      };
    });
  };

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route
              path="/dig"
              render={() => (
                <Dig onLikeRock={this.likeRock} onDislikeRock={this.dislikeRock} rocks={this.state.allRocks} />
              )}
            />
            <Route path="/matches" exact component={Matches} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
