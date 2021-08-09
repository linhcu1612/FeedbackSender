/** @format */

import React from "react";
import TextField from "@material-ui/core/TextField";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <>
      <div className=''>
        <TextField
          id='outlined-basic'
          label={label}
          variant='outlined'
          {...input}
        />
        <div className='red-text' style={{ marginBotton: "20px" }}>
          {touched && error}
        </div>
      </div>
    </>
  );
};
