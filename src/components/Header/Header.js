import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className="navlink__parent">
        <NavLink className={s.NavLink} to="/">
          Counter-Main
        </NavLink>
        <NavLink className={s.NavLink} to="/login">
          Login
        </NavLink>
        <NavLink className={s.NavLink} to="/modal">
          Modal
        </NavLink>
        <NavLink className={s.NavLink} to="/todo">
          TodoList
        </NavLink>
        <NavLink className={s.NavLink} to="/giphy">
          Giphy
        </NavLink>
        <NavLink className={s.NavLink} to="/kinopoisk">
          Kinopoisk
        </NavLink>
      </div>
    </>
  );
};

export default Header;
