import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div class="login-clean">
        <form method="post">
          <h2 class="sr-only">Login Form</h2>

          <div class="illustration">
            <i class="icon ion-ios-navigate"></i>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="username"
              name="email"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
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
