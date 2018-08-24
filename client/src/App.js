import React, { Component } from "react";
import Posts from "./component/Posts";
import PostForm from "./component/PostForm";
import Home from "./component/Home";
import Login from "./component/authentication/Login";
import Register from "./component/authentication/Register";
import Dashboard from "./component/Dashboard";
import CreatePoll from "./component/create poll/CreatePoll";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authAction";
import "./App.css";

///chek for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/create-poll" component={CreatePoll} />
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
