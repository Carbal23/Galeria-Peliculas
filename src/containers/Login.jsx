import React, { useState } from "react";
import "../assets/styles/login.css";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../actions";
import Header from "../components/Header";

const Login = (props) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
  });

  const handleOnchange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(inputValue);
    navigate("/");
  };
  
  return (
    <>
    <Header isLogin/>
    <section className="login">
      <section className="login_container">
        <h2>Iniciar Seccion</h2>
        <form onSubmit={handleSubmit} className="login_container-form">
          <input
            type="text"
            className="input"
            placeholder="Correo"
            onChange={handleOnchange}
            name="email"
            value={inputValue.email}
          />
          <input
            type="password"
            className="input"
            placeholder="Contraseña"
            onChange={handleOnchange}
            name="password"
          />
          <button className="button" type="submit">
            Iniciar seccion
          </button>
          <div className="login_container-rememberme">
            <label htmlFor="">
              <input type="checkbox" id="cbox1" value="firs_checkbosx" />
              Recuerdame
            </label>
            <a href="/">Olvide mi contraseña</a>
          </div>
        </form>
        <section className="login_container-social-media">
          <div>
            <img src={googleIcon} alt="" />
            Iniciar seccion con google
          </div>
          <div>
            <img src={twitterIcon} alt="" />
            Iniciar seccion con twitter
          </div>
        </section>
        <section>
          <p className="login_container-register">
            No tienes ninguna cuenta<Link to="/register">Registrate</Link>
          </p>
        </section>
      </section>
    </section>
    </>
  );
};

const mapDispachToProps = {
  loginRequest,
};

export default connect(null, mapDispachToProps)(Login);
