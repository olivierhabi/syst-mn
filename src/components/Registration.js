import React, { useState } from "react";
import Navbar from "./navbar";
import API from "./Api";
import Adminav from "../components/AdminNav";
import Dashboard from "../components/Dashboard";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("auth-token");
  const options = {
    headers: { Authorization: token },
  };

  const Login = (e) => {
    e.preventDefault();
    setMessage("");

    API.post(
      "/user/signup",
      {
        username: username,
        password: password,
      },
      options
    ).then(
      (response) => {
        const { message, token } = response.data;
        setMessage(message);
      },
      (error) => {
        if (!error.response) {
          const networkError = "Error: Network Error";
          setMessage(networkError);
        }
        const { status, message } = error.response.data;
        setMessage(message);
      }
    );
  };

  const Error = () => {
    if (!message) {
      return null;
    }
    return (
      <div>
        <p className="message-warning">{message}</p>
      </div>
    );
  };

  return (
    <body id="page-top">
      <div id="wrapper">
        <Dashboard />
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Adminav />
            <div class="login-clean">
              <form onSubmit={Login}>
                <h2 class="sr-only">Login Form</h2>

                <div class="illustration">
                  <i class="icon ion-ios-navigate"></i>
                </div>
                <div class="form-group">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    class="form-control"
                    type="username"
                    name="email"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    type="text"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <Error />
                <div class="form-group">
                  <button class="btn btn-primary btn-block" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
