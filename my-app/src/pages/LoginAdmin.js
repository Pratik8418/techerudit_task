import React, { useState } from "react";
import "./LoginAdmin.css";
import  Axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AdminLoginstatus,setLoginStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/adminLogin", {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data[0].email);
      }
    })
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Login</button>
        <h2> {setLoginStatus}</h2>
      </form>
    </div>
  );
};

export default LoginForm;
