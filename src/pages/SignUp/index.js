import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/M.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="MeetApp" />

      <form>
        <input placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign Up</button>
        <Link to="/">Already a member</Link>
      </form>
    </>
  );
}
