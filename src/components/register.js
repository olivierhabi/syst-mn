import React from "react";

const Register = () => {
  return (
    <div class="contact-clean">
      <form method="post">
        <h2 class="text-center">Register a user</h2>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="First Name"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Last Name"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Mother Name"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Father Name"
          />
        </div>
        <div class="form-group">
          <select class="form-control">
            <optgroup label="Gender">
              <option value="12" selected="">
                Male
              </option>
              <option value="13">Female</option>
            </optgroup>
          </select>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Province"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="District"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Sector"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Cell"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Residence"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Place of work"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="I.D No"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Place of Issue"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Phone Number"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="illness"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="E-mail"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Zip_ code"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
