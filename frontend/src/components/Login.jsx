import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import "./Login.css";


function Login() {
  const [userid, setUserid] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { userid, password })
      .then((res) => {
        if (res.data.data === "Sales") {
          console.log(JSON.stringify(res.data));
          navigate("/sales");
        } else if (res.data.data === "Accounts") {
          console.log(JSON.stringify(res.data));
          navigate("/accounts");
        } else if (res.data.data === "Visa") {
          console.log(JSON.stringify(res.data));
          navigate("/visa");
        } else if (res.data.data === "Flight") {
          console.log(JSON.stringify(res.data));
          navigate("/flight");
        }
      });
  }

  return (
    <>
   
    <div className="bgColor">
    
      <div className="logo">
        <img src={logo} width="200px" height="150px" alt="logo" />
      </div>
      
      <div className="row">
        <div className="col-md-4 offset-md-3">

        
          <div className="signup-form">
          
            <form
              className="mt-5 p-4 shadow"
              onSubmit={handleSubmit}
            >
              
              <h4 className="mb-5 text-secondary ">Sign in to your account</h4>
              
              <div >
              
                <div className="mb-3 col-md-12">
                  <label htmlFor="text">
                    Username<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="Username"
                    required
                    onChange={(event) => setUserid(event.target.value)}
                  />
                </div>

                <div className="">
                  <label htmlFor="password">
                    Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="col-md-12 btnDiv">
                  <button type="submit" className="btn  float-center btn-lg" style={{marginTop: "10px"}}>
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
