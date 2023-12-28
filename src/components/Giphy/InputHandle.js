import React from "react";

const InputHandle = ({ values, type, handleAllValues, searchGiphy, name }) => {
  return (
    <div>
      <input
        placeholder="12"
        type="text"
        onChange={handleAllValues(name)}
        values={values}
      />
    </div>
  );
};

export default InputHandle;
