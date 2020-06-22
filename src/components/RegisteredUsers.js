import React, { useState, useEffect } from "react";
import API from "./Api";
import Adminav from "../components/AdminNav";
import Dashboard from "../components/Dashboard";
import { convertArrayToCSV } from "convert-array-to-csv";

import { CSVLink, CSVDownload } from "react-csv";

const Table = () => {
  const [data, setData] = useState([]);
  const [, setMessage] = useState("");

  const token = localStorage.getItem("auth-token");
  const options = {
    headers: { Authorization: token },
  };
  const fetchData = async () => {
    let mounted = true;
    await API.get("/people/all", options)
      .then((res) => {
        if (mounted) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect((mounted) => {
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);
  const csv = convertArrayToCSV(data);

  return (
    <body id="page-top">
      <div id="wrapper">
        <Dashboard />
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Adminav />
            <div class="container-fluid">
              <h3 class="text-dark mb-4">Registered users</h3>
              <button
                class="btn btn-primary"
                type="button"
                style={{
                  marginBottom: 21,
                  marginLeft: 10,
                  width: 117,
                  height: 38,
                }}
              >
                <CSVLink id="export-btn" data={csv}>
                  Export
                </CSVLink>
              </button>

              <div class="card shadow">
                <div class="card-header py-3">
                  <p class="text-primary m-0 font-weight-bold">Users info</p>
                </div>
                <div class="card-body">
                  <div
                    class="table-responsive table mt-2"
                    id="dataTable"
                    role="grid"
                    aria-describedby="dataTable_info"
                  >
                    <table class="table dataTable my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Phone</th>
                          <th>District</th>
                          <th>Illness</th>
                          <th>Gender</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((people, index) => {
                          // eslint-disable-next-line no-redeclare
                          var index = index + 1;
                          return (
                            <tr key={index}>
                              <td>
                                {index}. {people.firstName}
                              </td>
                              <td>{people.lastName}</td>
                              <td>{people.phoneNumber}</td>
                              <td>{people.district}</td>
                              <td>{people.illness}</td>
                              <td>{people.gender}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Table;
