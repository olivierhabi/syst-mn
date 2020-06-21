import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisteredUsers from "../components/RegisteredUsers";
import YourUsers from "../components/YourUsers";
import Registration from "../components/Registration";
import Dashboard from "../components/Dashboard";
import Adminav from "../components/AdminNav";
const AdminRoutes = () => {
  return (
    <body id="page-top">
      <div id="wrapper">
        <Dashboard />
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Adminav />
            <Switch>
              <Route path="/account" component={RegisteredUsers} exact={true} />
              <Route path="/users" component={YourUsers} exact={true} />
              <Route
                path="/registration"
                component={Registration}
                exact={true}
              />
            </Switch>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AdminRoutes;
