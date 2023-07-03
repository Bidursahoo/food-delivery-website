import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [details, setDetails] = useState({
    name: "",
    mail: "",
    loc: "",
    pass: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault(); //Sythetic Event
    fetch("http://localhost:3004/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        mail: details.mail,
        pass: details.pass,
        loc: details.loc,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((sts) => {
        // console.log(sts);
        if (!sts.success) {
          alert("Please Enter Valid Credentials");
        } else {
          setDetails({
            name: "",
            mail: "",
            loc: "",
            pass: "",
          });
        }
      });
  };
  return (
    <>
      <div className="container">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="name"
              value={details.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Location">Location</label>
            <input
              type="text"
              className="form-control"
              name="loc"
              placeholder="Location"
              value={details.loc}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="mail"
              value={details.mail}
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
              value={details.pass}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Agree to <strong>Terms & Conditions</strong>
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/login" type="submit" className="btn btn-primary">
            Already An User?
          </Link>
        </form>
      </div>
    </>
  );
}
