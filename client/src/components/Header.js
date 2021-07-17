/** @format */

import React from "react";

export default function Header() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo left'>
          Logo
        </a>
        <ul className='right'>
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
