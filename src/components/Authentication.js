import React, { useState, useEffect } from "react";
import getToken from "../helpers/jwt";
import API from "../components/Api";
import { useHistory } from "react-router-dom";

const Authenticated = (props) => {
  const [user, setUser] = useState({ user: undefined });
  const history = useHistory();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      history.push("/login");
    }
    let mounted = true;
    return () => {
      mounted = false;
    };
  }, [history]);

  if (user === undefined) {
    console.log("loading");
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
  return <div>{props.children}</div>;
};
export default Authenticated;
