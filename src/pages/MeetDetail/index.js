/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import ca from 'date-fns/locale/en-CA';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';
import {
  Container,
  Header,
  Title,
  EditButton,
  CancelButton,
  Banner,
  Infos,
  DescText,
} from './styles';
import defaultBanner from '../../assets/Bitmap.png';
import { changeMeet } from '../../store/modules/meet/actions';

export default function MeetDetail({ match }) {
  const dispatch = useDispatch();
  const page = useSelector(state => state.meet.page);
  const { meet } = match.params;
  const [myMeets, setMyMeets] = useState([]);
  const [chooseMeet, setChooseMeet] = useState();

  async function loadMyMeets(pg) {
    const response = await api.get('meetups', {
      params: { page: pg },
    });

    setMyMeets(response.data.rows);
  }

  useEffect(() => {
    loadMyMeets(page);
  }, [page]);

  useEffect(() => {
    const cItem = myMeets.find(item => Number(item.id) === Number(meet));
    setChooseMeet(cItem);
  }, [meet, myMeets]);

  function FormatDate(dateF) {
    const newDate = parseISO(dateF);
    return format(newDate, "MMM do '-' hh:mma", { locale: ca });
  }

  async function handleCancel(id) {
    try {
      const meetid = { id };

      await api.delete('/meetups', { data: meetid });

      dispatch(changeMeet());

      toast.success('Registration canceld.');

      history.push('/mymeets');
    } catch (err) {
      console.tron.log(err);
      toast.error("Error: You can't canel this Meetup.");
    }
  }

  return (
    <Container>
      <Header>
        <Title>{chooseMeet && chooseMeet.title}</Title>
        <div>
          <Link to={`/newmeet/${chooseMeet && chooseMeet.id}`}>
            <EditButton>
              <MdEdit size={25} />
              <span>Edit</span>
            </EditButton>
          </Link>
          <CancelButton onClick={() => handleCancel(chooseMeet.id)}>
            <MdDeleteForever size={25} />
            <span>Cancel</span>
          </CancelButton>
        </div>
      </Header>
      <Banner
        src={
          (chooseMeet && chooseMeet.banner && chooseMeet.banner.url) ||
          defaultBanner
        }
      />
      <Infos>
        <DescText>{chooseMeet && chooseMeet.description}</DescText>
        <div>
          <MdEvent size={15} />
          <span>{chooseMeet && FormatDate(chooseMeet.date)}</span>
          <MdLocationOn size={15} />
          <span>{chooseMeet && chooseMeet.localization}</span>
        </div>
      </Infos>
    </Container>
  );
}

MeetDetail.propTypes = {
  match: PropTypes.object.isRequired,
  meet: PropTypes.number.isRequired,
};
