import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import ca from 'date-fns/locale/en-CA';

import api from '../../services/api';
import { Container, Header, Title, NewButton, MeetList, Meet } from './styles';

export default function MyMeets() {
  const [myMeets, setMyMeets] = useState([]);

  useEffect(() => {
    async function loadMyMeets() {
      const response = await api.get('meetups');

      setMyMeets(response.data);
    }

    loadMyMeets();
  }, []);

  function FormatDate(dateF) {
    const newDate = parseISO(dateF);
    return format(newDate, "MMM do '-' hh:mma", { locale: ca });
  }

  return (
    <Container>
      <Header>
        <Title>My Meetups</Title>
        <Link to="newmeet">
          <NewButton>
            <MdAddCircleOutline size={25} />
            <span>New Meetup</span>
          </NewButton>
        </Link>
      </Header>
      <MeetList>
        {myMeets.map(item => (
          <Link to={`/mymeets/${item.id}`}>
            <Meet>
              <span>{item.title}</span>
              <div>
                <span>{FormatDate(item.date)}</span>
                <MdChevronRight size={30} color="#FFF" />
              </div>
            </Meet>
          </Link>
        ))}
      </MeetList>
    </Container>
  );
}
