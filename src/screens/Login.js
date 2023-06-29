import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    mail: "",
    pass: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault(); //Sythetic Event
    fetch("http://localhost:3004/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail: credentials.mail,
        pass: credentials.pass,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((sts) => {
        console.log(sts);
        if (!sts.success) {
          alert(sts.errors);
        } else {
          // setCredentials({
          //   mail: "",
          //   pass: "",
          // });
          localStorage.setItem("authTocken",sts.authTocken)
          console.log(localStorage.getItem("authTocken"))
          navigate("/")
        }
      });
  };
  return (
    <>
      <div className="container">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="mail"
              value={credentials.mail}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="pass"
              value={credentials.pass}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <Link to="/signup" type="submit" className="btn btn-primary">
            First Time?
          </Link>
        </form>
      </div>
    </>
  );
}
