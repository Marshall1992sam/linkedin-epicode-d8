import React from "react";
import Logo from "../../assets/Logo.png"
import Google from "../../assets/google-icon.png";
import { Link } from "react-router-dom";
import "./Login.css";


const Login = (props) => {
  return (
    <div className="container">
      <nav className="nav">
        <a href="/">
          <img src="/images/login-logo.svg" alt="" className="immagineasd"/>
        </a>
        <div>
          <a className="join" href="/">
            Join now
          </a>
          <a className="sign-in" href="/">
            Sign in
          </a>
        </div>
      </nav>
      <section className="section">
        <div className="hero">
          <h1>Welcome to your professional community</h1>
          <img
            src={Logo}
            alt=""
            style={{width:"400px", objectFit: "contain" }}
          />
        </div>
        <div className="form">
          <Link to="/home">
            <button className="google">
              <img
                src={Google}
                alt=""
                style={{ width: "30px", padding: "5px" }}
              />
              Sign in with Google
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
