import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import classNames from "classnames";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hashUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header',{
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hashUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          {hashUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}

          {hashUser ? (
            <li>
              <Link to="/login" onClick={handleLogout}>
                Cerrar seccion
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar seccion</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
