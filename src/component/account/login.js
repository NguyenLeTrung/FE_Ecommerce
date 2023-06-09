import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import axios from "axios";
import { API_BASE_URL, API_LOCALHOST } from "../service/env";
import { showNotification } from "../service/notifications";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post(`${API_BASE_URL}acc/login-customer`, {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response.data.customer[0]);
      localStorage.setItem("accessToken", response.data.jwt);
      localStorage.setItem("userToken", JSON.stringify(response.data.customer));
      showNotification("Login success", "success")
      window.location.replace(`${API_LOCALHOST}`)
    })
    .catch(error => {
      console.log(error);
      showNotification("Login Fail!", "danger");
    })
  }

  return (
    <>
      <MetaData title="Login" />
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          {/* <!-- sidebar column  --> */}
          <div className="loginSidebar bg-primary-blue p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
            <h1 className="font-semibold text-blue-950 text-3xl">Login</h1>
            <p className="font-medium text-gray-700 text-lg">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          {/* <!-- sidebar column  --> */}

          {/* <!-- login column --> */}
          <div className="flex-1 overflow-hidden">
            {/* <!-- edit info container --> */}
            <div className="text-center py-10 px-4 sm:px-14">
              {/* <!-- input container --> */}
              <form onSubmit={handleLogin}>
                <div className="flex flex-col w-full gap-4">
                  <TextField
                    fullWidth
                    id="username"
                    label="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                  />
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                  />
                  {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                  {/* <!-- button container --> */}
                  <div className="flex flex-col gap-2.5 mt-2 mb-32">
                    <button
                      type="submit"
                      className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium"
                    >
                      Login
                    </button>
                  </div>
                  {/* <!-- button container --> */}
                </div>
              </form>
              {/* <!-- input container --> */}
              <Link
                to="/register"
                className="font-medium text-sm text-primary-blue"
              >
                Create an account
              </Link>
            </div>
            {/* <!-- edit info container --> */}
          </div>
          {/* <!-- login column --> */}
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Login;
