import React, { useEffect, useState } from "react";
import "./AlertMessage.css";

const AlertMessage = ({ state, title, conditionNumber }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (state > conditionNumber) {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [state, conditionNumber]);

  return (
    <>
      {visible && (
        <div className="alert-container">
          <p>
            {title} was added:<span>{state}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default AlertMessage;
