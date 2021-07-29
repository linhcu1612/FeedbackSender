/** @format */

import React from "react";

export default function SurveyListItem({
  title,
  dateSend,
  body,
  yes,
  no,
  lastResponded,
}) {
  return (
    <div className='card darken-1'>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
        <p>{body}</p>
        <p className='right'>
          Sent On: {new Date(dateSend).toLocaleDateString()}
        </p>
      </div>
      <div className='card-action'>
        <a href=''>Yes: {yes}</a>
        <a href=''>No: {no}</a>
      </div>
    </div>
  );
}
