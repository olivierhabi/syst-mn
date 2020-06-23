import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import API from "./Api";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
  const [residence, setResidence] = useState("");
  const [placeOfWork, setplaceOfWork] = useState("");
  const [idNo, setIdNo] = useState("");
  const [placeOfIssue, setPlaceOfIssue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [illness, setIllness] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const Register = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("auth-token");
    const options = {
      headers: { Authorization: token },
    };

    API.post(
      "/people/create",
      {
        firstName,
        lastName,
        motherName,
        fatherName,
        province,
        district,
        sector,
        cell,
        village,
        residence,
        placeOfWork,
        idNo,
        placeOfIssue,
        phoneNumber,
        illness,
        email,
        zipCode,
        gender,
      },
      options
    ).then(
      (response) => {
        const { message } = response.data;
        setMessage(message);
        setFirstName("");
        setLastName("");
        setMotherName("");
        setFatherName("");
        setProvince("");
        setDistrict("");
        setSector("");
        setCell("");
        setVillage("");
        setResidence("");
        setplaceOfWork("");
        setIdNo("");
        setPlaceOfIssue("");
        setPhoneNumber("");
        setIllness("");
        setEmail("");
        setZipCode("");
        setGender("");
        console.log(response.data);
      },
      (error) => {
        if (!error.response) {
          const networkError = "Error: Network Error";
          setMessage(networkError);
        }
        const { status, message } = error.response.data;
        setMessage(message);
        console.log(error.response.data);
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
      <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container">
          <NavLink to="/" exact={true}>
            <a class="navbar-brand logo">
              AGA Rwanda Network Registration System
            </a>
          </NavLink>
          <div id="navcol-1">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item" role="presentation">
                <NavLink to="/logout" exact={true}>
                  <button class="btn btn-primary" type="button">
                    Logout
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="contact-clean">
        <form onSubmit={Register}>
          <h2 class="text-center">Register a user</h2>
          <div class="form-group">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="First Name"
            />
          </div>
          <div class="form-group">
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Last Name"
            />
          </div>
          <div class="form-group">
            <input
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Mother Name"
            />
          </div>
          <div class="form-group">
            <input
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Father Name"
            />
          </div>
          <div class="form-group">
            <select
              onChange={(e) => setGender(e.target.value)}
              class="form-control"
            >
              <optgroup label="Gender">
                <option selected="" value="male">
                  Male
                </option>
                <option value="female">Female</option>
              </optgroup>
            </select>
          </div>
          <div class="form-group">
            <input
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Province"
            />
          </div>
          <div class="form-group">
            <input
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="District"
            />
          </div>
          <div class="form-group">
            <input
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Sector"
            />
          </div>
          <div class="form-group">
            <input
              value={cell}
              onChange={(e) => setCell(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Cell"
            />
          </div>
          <div class="form-group">
            <input
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Village"
            />
          </div>
          <div class="form-group">
            <input
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Residence"
            />
          </div>
          <div class="form-group">
            <input
              value={placeOfWork}
              onChange={(e) => setplaceOfWork(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Place of work"
            />
          </div>
          <div class="form-group">
            <input
              value={idNo}
              onChange={(e) => setIdNo(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="I.D No"
            />
          </div>
          <div class="form-group">
            <input
              value={placeOfIssue}
              onChange={(e) => setPlaceOfIssue(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Place of Issue"
            />
          </div>
          <div class="form-group">
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Phone Number"
            />
          </div>
          <div class="form-group">
            <input
              value={illness}
              onChange={(e) => setIllness(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="illness"
            />
          </div>
          <div class="form-group">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              class="form-control"
              type="text"
              name="name"
              placeholder="Zip_ code"
            />
          </div>
          <Error />
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
