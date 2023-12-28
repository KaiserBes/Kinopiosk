import React from "react";
import { Link } from "react-router-dom";
import s from "./Kino.module.css";

const Kino = ({ el }) => {
  return (
    <div className="col-4">
      <Link to={`/kinopoisk/details/${el.filmId}`} className={s.link}>
        <div className={s.kino__box}>
          <img src={el.posterUrl} alt="" />
          <h3 className={s.text__content}>{el ? el.nameRu : el.nameEn}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Kino;
