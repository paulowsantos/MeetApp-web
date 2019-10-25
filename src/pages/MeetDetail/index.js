/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import ca from 'date-fns/locale/en-CA';

import api from '../../services/api';
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

export default function MeetDetail({ match }) {
  const { meet } = match.params;
  const [myMeets, setMyMeets] = useState([]);
  const [chooseMeet, setChooseMeet] = useState();

  useEffect(() => {
    async function loadMyMeets() {
      const response = await api.get('meetups');

      setMyMeets(response.data);
    }

    loadMyMeets();
  }, []);

  useEffect(() => {
    const cItem = myMeets.find(item => Number(item.id) === Number(meet));
    setChooseMeet(cItem);
  }, [meet, myMeets]);

  function FormatDate(dateF) {
    const newDate = parseISO(dateF);
    return format(newDate, "MMM do '-' hh:mma", { locale: ca });
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
          <CancelButton>
            <MdDeleteForever size={25} />
            <span>Cancel</span>
          </CancelButton>
        </div>
      </Header>
      <Banner src={defaultBanner} />
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
