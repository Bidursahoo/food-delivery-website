import React from "react";
import { Link , useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const navigate =useNavigate();
  function handleLogout(){
    localStorage.removeItem("authTocken");
    navigate("/");
  }
  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-info rounded ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">
            Foodie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
            {localStorage.getItem("authTocken") ? (
              <li className="nav-item">
                <div className="btn bg-white text-danger mx-1 " onClick={handleLogout}>
                  Logout
                </div>
              </li>
              ) : (
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              )}
              
              {localStorage.getItem("authTocken") ? (
                <div className="btn bg-white text-success mx-1">Cart</div>
              ) : (
                <div className="d-flex">
                  <Link className="btn bg-white text-success mx-1" to="/login">
                    Login
                  </Link>
                  <Link className="btn bg-white text-warning mx-1" to="/signup">
                    SignUp
                  </Link>
                </div>
              )}

              <li className="nav-item">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={props.search}
                    onChange={(event) => {
                      props.setSearch(event.target.value);
                    }}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
