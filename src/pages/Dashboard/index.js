import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdPeople,
  MdSearch,
  MdAssignment,
  MdAddCircleOutline,
} from 'react-icons/md';

import { Container, Card } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Link to="/searchmeets">
        <Card>
          <MdSearch size={60} />
          <span>Seach Meets</span>
        </Card>
      </Link>
      <Link to="/mymeets">
        <Card>
          <MdPeople size={60} />
          <span>My Meetups</span>
        </Card>
      </Link>
      <Link to="/registrations">
        <Card>
          <MdAssignment size={60} />
          <span>Registrations</span>
        </Card>
      </Link>
      <Link to="/newmeet">
        <Card>
          <MdAddCircleOutline size={60} />
          <span>New Meetup</span>
        </Card>
      </Link>
    </Container>
  );
}
