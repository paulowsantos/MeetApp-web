import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/M.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Paulo Wayner</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Paulo Wayner"
            />
            <button type="button">Log out</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
