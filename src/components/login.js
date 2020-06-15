import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./navbar";
import API from "./Api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const Login = (e) => {
    e.preventDefault();
    setMessage("");

    API.post("/user/signin", {
      username: username,
      password: password,
    }).then(
      (response) => {
        const { message, token } = response.data;
        localStorage.setItem("auth-token", token);
        setMessage(message);
        history.push("/account");
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
    <>
      <Navbar />
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
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <Error />
          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
