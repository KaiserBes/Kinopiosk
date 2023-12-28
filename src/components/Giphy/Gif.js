import React from "react";
import s from "./Gif.module.css";

const Gif = ({ el }) => {
  return (
    <div className={`container ${s.container}`}>
      <div className={`row ${s.row}`}>
        <div className={`col-lg-3 col-md-4 col-sm-6 col-12 ${s.col}`}>
          <div className={`row ${s.card}`}>
            <div className="col">
              <div className={`row ${s.box}`}>
                <iframe className={s.photo} src={el.embed_url} title="giphy" />
              </div>
              <p>Title: {el.title}</p>

              <p>Trending Datetime: {el.trending_datetime}</p>
              <p>Username: {el.username}</p>
            </div>
          </div>
        </div>
        <div className={`col-lg-3 col-md-4 col-sm-6 col-12 ${s.col}`}>
          <div className={`row ${s.card}`}>
            <div className="col">
              <div className={`row ${s.box}`}>
                <iframe className={s.photo} src={el.embed_url} title="giphy" />
              </div>
              <p>Title: {el.title}</p>

              <p>Trending Datetime: {el.trending_datetime}</p>
              <p>Username: {el.username}</p>
            </div>
          </div>
        </div>
        <div className={`col-lg-3 col-md-4 col-sm-6 col-12 ${s.col}`}>
          <div className={`row ${s.card}`}>
            <div className="col">
              <div className={`row ${s.box}`}>
                <iframe className={s.photo} src={el.embed_url} title="giphy" />
              </div>
              <p>Title: {el.title}</p>

              <p>Trending Datetime: {el.trending_datetime}</p>
              <p>Username: {el.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gif;
