import React from "react";
import s from "./Details.module.css";

const Details = ({ posterUrl }) => {
  return (
    <>
      <div className="container">
        <p>{posterUrl}</p>
      </div>
    </>
  );
};

export default Details;
