import React, { useState } from "react";
import "../assets/styles/register.scss";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import Header from "../components/Header";

const Register = props => {
  const navigate = useNavigate();
  const [inputValueR, setInputValueR] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnchange = e =>{
    setInputValueR({
      ...inputValueR,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = e =>{
    e.preventDefault();
    props.registerRequest(inputValueR);
    navigate("/login")
  }

  return (
    <>
    <Header isRegister/>
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form 
        className="register__container--form"
        onSubmit={handleSubmit}
        >
          <input 
          className="input" 
          type="text" 
          placeholder="Nombre" 
          name="name"
          onChange={handleOnchange}
          />
          <input 
          className="input" 
          type="text" 
          placeholder="Correo" 
          name="email"
          onChange={handleOnchange}
          />
          <input 
          className="input" 
          type="password" 
          placeholder="Contraseña"
          name="password"
          onChange={handleOnchange}
          />
          <button 
          className="button"
          type="submit"
          >Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
    </>
  );
};
const mapDispatchToProps ={
  registerRequest
}

export default connect(null,mapDispatchToProps)(Register);