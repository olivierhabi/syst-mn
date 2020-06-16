import React, { useState, useEffect } from "react";
import API from "./Api";

const Table = () => {
  const [data, setData] = useState([]);
  const [, setMessage] = useState("");

  const token = localStorage.getItem("auth-token");
  const options = {
    headers: { Authorization: token },
  };
  const fetchData = async () => {
    let mounted = true;
    await API.get("/user/all", options)
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

  return (
    <div class="container-fluid">
      <h3 class="text-dark mb-4">Your users</h3>
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
                  <th>Username</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((users, index) => {
                  // eslint-disable-next-line no-redeclare
                  var index = index + 1;
                  return (
                    <tr key={index}>
                      <td>
                        {index}. {users.username}
                      </td>
                      <td>
                        <a href="#">Delete</a>
                      </td>
                      <td>
                        <a href="#">Edit</a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
