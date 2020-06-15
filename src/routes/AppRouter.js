import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/index";
import Login from "../components/login";
import Register from "../components/register";
import Dashboard from "../components/Dashboard";
import RegisteredUsers from "../components/RegisteredUsers";
import YourUsers from "../components/YourUsers";
import Adminav from "../components/AdminNav";
import Authenticated from "../components/Authentication";
import Logout from "../components/Logout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/logout" component={Logout} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Authenticated>
            <body id="page-top">
              <div id="wrapper">
                <Dashboard />
                <div class="d-flex flex-column" id="content-wrapper">
                  <div id="content">
                    <Adminav />
                    <Route
                      path="/account"
                      component={RegisteredUsers}
                      exact={true}
                    />
                    <Route path="/users" component={YourUsers} exact={true} />
                  </div>
                </div>
              </div>
            </body>
          </Authenticated>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
