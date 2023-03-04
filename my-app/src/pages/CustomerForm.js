import React, { useState } from "react";
import "./CustomerForm.css";
import  Axios from "axios";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/CustomerRegistration",{
       email : email,
       username : fullName,
       password : password,
   }).then((response) => {
      if(response.data.message){
        setRegistrationStatus(response.data.message);
      }else{
        setRegistrationStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
   })
  }

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
        />

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

        <button type="submit">Register</button>
        <h2>{registrationStatus}</h2>
      </form>
    </div>
  );
};

export default RegistrationForm;
