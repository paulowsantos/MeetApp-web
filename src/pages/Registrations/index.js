import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import ca from 'date-fns/locale/en-CA';
import { toast } from 'react-toastify';
import { MdEvent, MdLocationOn, MdPerson } from 'react-icons/md';

import {
  Container,
  Meet,
  Banner,
  Infos,
  Title,
  InfoInfo,
  InfoText,
  CancelRegButton,
  TextButton,
} from './styles';
import { changeMeet } from '../../store/modules/meet/actions';
import api from '../../services/api';
import defaultBanner from '../../assets/Bitmap.png';

export default function Registrations() {
  const dispatch = useDispatch();
  const changedMeet = useSelector(state => state.meet.meetchanged);

  const [myMeets, setMyMeets] = useState([]);

  useEffect(() => {
    async function loadMyMeets() {
      const response = await api.get('searchmymeets');

      setMyMeets(response.data);
    }

    loadMyMeets();
  }, [changedMeet]);

  function FormatDate(dateF) {
    const newDate = parseISO(dateF);
    return format(newDate, "MMM do '-' hh:mma", { locale: ca });
  }

  async function handleCancelReg(id) {
    try {
      const meet = { id };

      await api.delete('/enroll', { data: meet });

      dispatch(changeMeet());

      toast.success('Registration canceld.');
    } catch (err) {
      toast.error('Fail.');
    }
  }

  return (
    <Container>
      <ul>
        {myMeets.map(item => (
          <Meet past={item.Meetup.past}>
            <Banner
              src={
                item.Meetup.banner
                  ? { uri: item.Meetup.banner.url }
                  : defaultBanner
              }
            />
            <Infos>
              <Title>{item.Meetup.title}</Title>
              <InfoInfo>
                <MdEvent size={15} color="#999" />
                <InfoText>{FormatDate(item.Meetup.date)}</InfoText>
              </InfoInfo>
              <InfoInfo>
                <MdLocationOn size={15} color="#999" />
                <InfoText>{item.Meetup.localization}</InfoText>
              </InfoInfo>
              <InfoInfo>
                <MdPerson size={15} color="#999" />
                <InfoText>Organizer: {item.Meetup.User.name}</InfoText>
              </InfoInfo>
            </Infos>
            <CancelRegButton onClick={() => handleCancelReg(item.id)}>
              <TextButton>Cancel Registration</TextButton>
            </CancelRegButton>
          </Meet>
        ))}
      </ul>
    </Container>
  );
}
