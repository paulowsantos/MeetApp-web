import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';
import defaulAvatar from '../../assets/avatar.jpg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" style={{ height: 50 }} />
          </Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={profile.avatar ? profile.avatar.url : defaulAvatar}
              alt="Paulo Wayner"
            />
            <button type="button" onClick={handleSignOut}>
              Log out
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
