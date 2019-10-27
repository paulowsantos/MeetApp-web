import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdChevronRight,
  MdChevronLeft,
} from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import ca from 'date-fns/locale/en-CA';

import api from '../../services/api';
import { changePage } from '../../store/modules/meet/actions';
import { Container, Header, Title, NewButton, Meet, Paging } from './styles';

export default function MyMeets() {
  const dispatch = useDispatch();
  const [myMeets, setMyMeets] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const page = useSelector(state => state.meet.page);

  async function loadMyMeets(pg = page) {
    if (totalPages && pg > totalPages) return;

    const response = await api.get('meetups', {
      params: { page: pg },
    });

    setTotalPages(Math.ceil(response.data.count / 10));

    setMyMeets(response.data.rows);

    dispatch(changePage(pg));
  }

  useEffect(() => {
    loadMyMeets();
  }, []); // eslint-disable-line

  function FormatDate(dateF) {
    const newDate = parseISO(dateF);
    return format(newDate, "MMM do '-' hh:mma", { locale: ca });
  }

  function handlePrevClick() {
    const newPage = page - 1;
    if (newPage < 1) {
      return;
    }
    loadMyMeets(newPage);
  }

  function handleNextClick() {
    const newPage = page + 1;
    loadMyMeets(newPage);
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
      <ul>
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
      </ul>
      <Paging>
        <button type="button" onClick={handlePrevClick} disabled={page === 1}>
          <MdChevronLeft size={30} color="#FFF" />
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          disabled={page === totalPages}
        >
          <MdChevronRight size={30} color="#FFF" />
        </button>
      </Paging>
    </Container>
  );
}
