import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = async event => {
    event.preventDefault();
    let { name, email, password, password2 } = this.state;

    const newUser = {
      name,
      email,
      password,
      password2
    };
    try {
      const save = await axios.post("/api/user/register", newUser);
    } catch (err) {
      this.setState({ errors: err.response.data });
    }
  };
  render() {
    let { name, email, password, password2, errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create an account to create a new quiz account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={
                      !errors.name
                        ? "form-control form-control-lg"
                        : "form-control form-control-lg is-invalid"
                    }
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                  />
                  {errors.name ? (
                    <div className="invalid-feedback">{errors.name}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={
                      !errors.email
                        ? "form-control form-control-lg"
                        : "form-control form-control-lg is-invalid"
                    }
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                  {errors.email ? (
                    <div className="invalid-feedback">{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={
                      !errors.password
                        ? "form-control form-control-lg"
                        : "form-control form-control-lg is-invalid"
                    }
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                  {errors.password ? (
                    <div className="invalid-feedback">{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={
                      !errors.password2
                        ? "form-control form-control-lg"
                        : "form-control form-control-lg is-invalid"
                    }
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 ? (
                    <div className="invalid-feedback">{errors.password2}</div>
                  ) : null}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
