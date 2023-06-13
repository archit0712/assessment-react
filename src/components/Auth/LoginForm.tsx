import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
// import * from './Login.css'
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform input validation and authentication using JWT

    console.log(username);
    console.log(password);
    if (username && password) {
      const result = login({ username: username, password: password });
      if (result) {
        alert("Login Success");
        window?.location?.reload();
      }
    }
  };

  return (
    <>
      <h1 className="text-center">Login</h1>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          wrapperClass="mb-4"
          label="Username"
          id="username"
          type="text"
          onChange={(e: any) => {
            setUsername(e.target.value);
          }}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="password"
          type="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        {/* <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div> */}
        <MDBBtn
          className="mb-4"
          onClick={(e: any) => {
            handleSubmit(e);
          }}
        >
          Sign in
        </MDBBtn>
      </MDBContainer>
    </>
  );
};

export default LoginForm;
