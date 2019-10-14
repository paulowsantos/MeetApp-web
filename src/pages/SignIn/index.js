import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/M.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign In</button>
        <Link to="/register">Sign up for free</Link>
      </form>
    </>
  );
}
