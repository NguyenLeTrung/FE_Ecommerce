import React, { useState } from "react";
import { TextField } from "@mui/material";
import MetaData from "../layouts/MetaData";
import { Link } from "react-router-dom";
import { showNotification } from "../service/notifications";
import axios from "axios";
import { API_BASE_URL, API_LOCALHOST } from "../service/env";

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    await axios.post(`${API_BASE_URL}acc/register-customer`, {
      username: username,
      email: email,
      password: password
    })
    .then(response => {
      showNotification("Register Acccount Success", "success")
      window.location.replace(`${API_LOCALHOST}login`);
      setTimeout(function () {
        window.location.reload();
      }, 1000)
    })
  }

  return (
    <>
      <MetaData title="Register" />
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          {/* <!-- sidebar column  --> */}
          <div className="loginSidebar bg-primary-blue p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
            <h1 className="font-semibold text-blue-950 text-3xl">Register</h1>
            <p className="font-medium text-gray-700 text-lg">Look like you're new here!</p>
          </div>
          {/* <!-- sidebar column  --> */}

          {/* <!-- register column --> */}
          <div className="flex-1 overflow-hidden">
            {/* <!-- edit info container --> */}
            <div className="text-center py-10 px-4 sm:px-14">
              {/* <!-- input container --> */}
              <form onSubmit={submit}>
                <div className="flex flex-col w-full gap-4">
                  <TextField
                    fullWidth
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    label="Username"
                    type="text"
                  />
                  <TextField
                    fullWidth
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label="Password"
                    type="password"
                  />

                  {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                  {/* <!-- button container --> */}
                  <div className="flex flex-col gap-2.5 mt-2 mb-32">
                    <p className="text-xs text-primary-grey text-left">
                      By continuing, you agree{" "}
                      <a href="/register" className="text-primary-blue">
                        {" "}
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a href="/register" className="text-primary-blue">
                        {" "}
                        Privacy Policy.
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium"
                    >
                      Register
                    </button>
                  </div>
                  {/* <!-- button container --> */}
                </div>
              </form>
              {/* <!-- input container --> */}
              <Link
                to="/login"
                className="font-medium text-sm text-primary-blue"
              >
                Have an account ? Log in 
              </Link>
            </div>
            {/* <!-- edit info container --> */}
          </div>
          {/* <!-- register column --> */}
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
}

export default Register;
