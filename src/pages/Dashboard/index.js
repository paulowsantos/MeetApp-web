import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <div>
      <Link to="/searchmeets">
        <button type="button">Seach Meets</button>
      </Link>
      <Link to="/mymeets">
        <button type="button">My Meets</button>
      </Link>
      <Link to="/newmeet">
        <button type="button">New Meet</button>
      </Link>
    </div>
  );
}
