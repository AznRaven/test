import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userLogin } from "../../services/userService";

let emptyForm = {
  username: "",
  phone: "",
};

function Login({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("a");
    const token = await userLogin(form);

    if (!token) {
      setForm(emptyForm);
      return;
    }

    localStorage.setItem("token", token);

    const user = await userInfo();
    setUser(user);

    navigate("/posts/new");
  };

  return (
    <div className="user-auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="col-12 col-md-6 col-lg-6">
        <label htmlFor="username">Enter Your Phone Number</label>
        <br />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={form.phone}
        />
        <br />
        <br />
        {/* <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                /> */}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
