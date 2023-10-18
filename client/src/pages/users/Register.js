import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userRegister } from "../../services/userService";

let emptyForm = {
  username: "",
  phone: "",
  email: "",
};

function Register({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await userRegister(form);

    if (!token) {
      setForm(emptyForm);
      return;
    }

    localStorage.setItem("token", token);

    const user = await userInfo();
    setUser(user);

    navigate("/posts");
  };

  return (
    <div className="user-auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="col-12 col-md-6 col-lg-6">
        <br />
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="username"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
          <label for="username">Full Name</label>
        </div>
        {/* <label htmlFor="username">Full Name:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={form.username}
        /> */}
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <label for="email">Email address</label>
        </div>
        
        {/* <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        /> */}
        
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="name@example.com"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={form.phone}
          />
          <label for="phone">Phone Number</label>
        </div>
        {/* <label htmlFor="phone">Phone Number:</label>
        <br />
        <input
          type="number"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={form.phone}
        /> */}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
