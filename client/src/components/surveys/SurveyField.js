/** @format */

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <>
      <div className=''>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: "5px" }} />
        <div className='red-text' style={{ marginBotton: "20px" }}>
          {touched && error}
        </div>
      </div>
    </>
  );
};
