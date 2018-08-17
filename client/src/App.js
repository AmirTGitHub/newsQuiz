import React, { Component } from "react";
import Posts from "./component/Posts";
import PostForm from "./component/PostForm";
import Home from "./component/Home";
import Login from "./component/authentication/Login";
import Register from "./component/authentication/Register";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <Home />
      // </Provider>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          {/* <CreateQuiz onChange={this.onChange} />
        <CreatePoll
          save={this.save}
          onChange={this.onChange}
          correctAnswer={this.correctAnswer}
          AddAnswer={this.AddAnswer}
          answers={answers}
        />
        {saved ? <Quiz quiz={allDataFromDB} /> : null} */}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
