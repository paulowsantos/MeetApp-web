/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ca from 'date-fns/locale/en-CA';
import { toast } from 'react-toastify';
import DateTimePicker from 'react-datetime-picker';

import BannerInput from './BannerInput';
import api from '../../services/api';
import history from '../../services/history';
import { Container } from './styles';
import { changeMeet, saveBanner } from '../../store/modules/meet/actions';

export default function NewMeet({ match }) {
  const dispatch = useDispatch();
  const { meet } = match.params;

  const [titleForm, setTitleForm] = useState('');
  const [descForm, setDescForm] = useState('');
  const [dateForm, setDateForm] = useState('');
  const [localForm, setLocalForm] = useState('');

  const [myMeets, setMyMeets] = useState([]);
  const [chooseMeet, setChooseMeet] = useState();

  useEffect(() => {
    async function loadMyMeets() {
      const response = await api.get('meetups');

      setMyMeets(response.data);
    }
    // console.tron.log(ca);
    loadMyMeets();
  }, []);

  function FormatDate(dateF) {
    const newDate = parseISO(dateF);
    return format(newDate, "MMM do '-' hh:mma", { locale: ca });
  }

  useEffect(() => {
    const cItem = myMeets.find(item => Number(item.id) === Number(meet));
    const dateF = cItem && FormatDate(cItem.date);
    setChooseMeet({
      ...cItem,
      date: dateF,
    });
  }, [meet, myMeets]);

  async function handleSubmit(data) {
    try {
      const { title, description, localization, banner_id } = data;

      const fmtDate = format(dateForm, "yyyy'-'MM'-'dd'T'HH:mm:ss'-08:00'", {
        locale: ca,
      });

      const submitMeet = {
        id: meet,
        title,
        description,
        localization,
        date: fmtDate,
        banner_id,
      };

      if (meet) {
        await api.put('/meetups', submitMeet);
        history.push(`/mymeets/${meet}`);
        toast.success('Meetup successfuly updated.');
      } else {
        await api.post('/meetups', submitMeet);
        setTitleForm('');
        setDescForm('');
        setDateForm('');
        setLocalForm('');
        dispatch(saveBanner(false));
        toast.success('Meetup successfuly created.');
      }

      dispatch(changeMeet());
    } catch (err) {
      toast.error('Check your input data.');
    }
  }

  function handleTitleChange(e) {
    setTitleForm(e.target.value);
  }

  function handleDescChange(e) {
    setDescForm(e.target.value);
  }

  function handleDateChange(date) {
    console.tron.log(date);
    const testdate = new Date(2019, 10, 31, 15, 0);
    // const fmtDate = format(date, 'z');
    console.tron.log(testdate);
    setDateForm(date);
  }

  function handleLocalChange(e) {
    setLocalForm(e.target.value);
  }

  return (
    <Container>
      <Form initialData={chooseMeet} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input
          className="regular"
          name="title"
          placeholder="Meetup Title"
          value={titleForm}
          onChange={handleTitleChange}
        />
        <Input
          className="regular"
          name="description"
          placeholder="Description"
          multiline
          value={descForm}
          onChange={handleDescChange}
        />
        <DateTimePicker
          onChange={handleDateChange}
          value={dateForm}
          className="datepicker"
        />
        <Input
          className="regular"
          name="localization"
          placeholder="Location"
          value={localForm}
          onChange={handleLocalChange}
        />

        <button type="submit" className="save">
          <MdAddCircleOutline size={25} style={{ marginRight: '6px' }} />
          Save
        </button>
      </Form>
    </Container>
  );
}

NewMeet.propTypes = {
  match: PropTypes.object,
  meet: PropTypes.number,
};
