import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/index";
import Login from "../components/login";
import Register from "../components/register";
import RegisteredUsers from "../components/RegisteredUsers";
import YourUsers from "../components/YourUsers";
import Authenticated from "../components/Authentication";
import Logout from "../components/Logout";
import Registration from "../components/Registration";
import LoginAdmin from "../components/loginAdmin";
import Auth from "../components/Auth";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/admin" component={LoginAdmin} exact={true} />
            <Route path="/logout" component={Logout} exact={true} />

            <Authenticated>
              <Route path="/account" component={RegisteredUsers} exact={true} />
              <Route path="/users" component={YourUsers} exact={true} />
              <Route
                path="/registration"
                component={Registration}
                exact={true}
              />
            </Authenticated>
          </Switch>
        </div>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Auth>
            <Route path="/register" component={Register} exact={true} />
          </Auth>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
