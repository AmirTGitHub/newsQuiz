import React, { Component } from "react";
import Posts from "./component/Posts";
import PostForm from "./component/PostForm";
import Home from "./component/Home";
import { Provider } from "react-redux";
import store from "./store";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
