import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChanged: (event) => {
      dispatch(setSearchField(event.target.value));
    },

    onRequestRobots: () => {
      dispatch(requestRobots());
    },
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChanged, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robots) => {
      return robots.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    if (isPending) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div className="tc">
          <Header />
          <br />
          <SearchBox searchChange={onSearchChanged} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
