import React from "react";
import Table from "./YourUsers";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Adminav from "./AdminNav";

const Dashbord = () => {
  return (
    <>
      <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div class="container-fluid d-flex flex-column p-0">
          <a
            class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#"
          >
            <div class="sidebar-brand-icon rotate-n-15"></div>
            <div class="sidebar-brand-text mx-3">
              <span>AGA Rwanda</span>
            </div>
          </a>
          <hr class="sidebar-divider my-0" />
          <ul class="nav navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item" role="presentation">
              <NavLink
                to="/account"
                className="nav-link"
                style={{
                  fontWeight: 700,
                  marginLeft: 15,
                }}
                exact={true}
              >
                <span>Registerd Users</span>
              </NavLink>

              <NavLink
                to="/users"
                className="nav-link"
                style={{
                  fontWeight: 700,
                  marginLeft: 15,
                }}
                exact={true}
              >
                <span>Your Users</span>
              </NavLink>
              <NavLink
                to="/registration"
                className="nav-link"
                style={{
                  fontWeight: 700,
                  marginLeft: 15,
                }}
                exact={true}
              >
                <span>Registration</span>
              </NavLink>
            </li>
            <li class="nav-item" role="presentation"></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Dashbord;
