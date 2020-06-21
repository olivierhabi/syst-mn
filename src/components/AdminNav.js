import React from "react";
import { NavLink } from "react-router-dom";
const Adminav = () => {
  return (
    <>
      <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div class="container-fluid">
          <button
            class="btn btn-link d-md-none rounded-circle mr-3"
            id="sidebarToggleTop"
            type="button"
          >
            <i class="fas fa-bars"></i>
          </button>
          <ul class="nav navbar-nav flex-nowrap ml-auto">
            <li class="nav-item dropdown d-sm-none no-arrow">
              <a
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                <i class="fas fa-search"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                role="menu"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto navbar-search w-100">
                  <div class="input-group">
                    <input
                      class="bg-light form-control border-0 small"
                      type="text"
                      placeholder="Search for ..."
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary py-0" type="button">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li class="nav-item dropdown no-arrow" role="presentation">
              <NavLink to="/logout" exact={true}>
                <button class="btn btn-primary" type="button">
                  Logout
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Adminav;
