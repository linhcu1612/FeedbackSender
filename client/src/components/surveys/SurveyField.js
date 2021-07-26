/** @format */

import React from "react";

export default ({ input, label }) => {
  return (
    <>
      <div className=''>
        <label>{label}</label>
        <input {...input} />
      </div>
    </>
  );
};
