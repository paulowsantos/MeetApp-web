import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, subDays, addDays, parseISO } from 'date-fns';
import ca from 'date-fns/locale/en-CA';
import { toast } from 'react-toastify';
import {
  MdChevronRight,
  MdChevronLeft,
  MdEvent,
  MdLocationOn,
  MdPerson,
} from 'react-icons/md';

import api from '../../services/api';
import defaultBanner from '../../assets/Bitmap.png';
import { changeMeet } from '../../store/modules/meet/actions';

import {
  Container,
  Meet,
  Banner,
  Infos,
  Title,
  InfoInfo,
  InfoText,
  RegisterButton,
  TextButton,
} from './styles';

export default function SearchMeets() {
  const dispatch = useDispatch();
  const changedMeet = useSelector(state => state.meet.meetchanged);

  const [meets, setMeets] = useState([]);
  const [dateT, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(dateT, 'MMM do', { locale: ca }), [
    dateT,
  ]);

  const dateParam = String(
    `${dateT.getUTCFullYear()}-${dateT.getUTCMonth() + 1}-${
      dateT.getUTCDate() < 10 ? `0${dateT.getUTCDate()}` : dateT.getUTCDate()
    }`
  );

  useEffect(() => {
    async function loadMeets() {
      const response = await api.get('search', {
        params: { date: dateParam },
      });

      setMeets(response.data);
    }

    loadMeets();
  }, [dateParam, changedMeet]);

  function handlePrevDay() {
    setDate(subDays(dateT, 1));
  }

  function handleNextDay() {
    setDate(addDays(dateT, 1));
  }

  function FormatDate(dateF) {
    const newDate = parseISO(dateF);
    return format(newDate, "MMM do '-' hh:mma", { locale: ca });
  }

  async function handleReg(id) {
    try {
      const meet = { meetup_id: id };

      await api.post('/enroll', meet);

      dispatch(changeMeet());

      toast.success('Registered.');
    } catch (err) {
      toast.error('Registration failed.');
    }
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        {meets.map(item => (
          <Meet past={item.past}>
            <Banner
              src={item.banner ? { uri: item.banner.url } : defaultBanner}
            />
            <Infos>
              <Title>{item.title}</Title>
              <InfoInfo>
                <MdEvent size={15} color="#999" />
                <InfoText>{FormatDate(item.date)}</InfoText>
              </InfoInfo>
              <InfoInfo>
                <MdLocationOn size={15} color="#999" />
                <InfoText>{item.localization}</InfoText>
              </InfoInfo>
              <InfoInfo>
                <MdPerson size={15} color="#999" />
                <InfoText>Organizer: {item.User.name}</InfoText>
              </InfoInfo>
            </Infos>
            <RegisterButton onClick={() => handleReg(item.id)}>
              <TextButton>Register</TextButton>
            </RegisterButton>
          </Meet>
        ))}
      </ul>
    </Container>
  );
}
