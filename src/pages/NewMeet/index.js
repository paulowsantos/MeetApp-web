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

import BannerInput from './BannerInput';
import api from '../../services/api';
import { Container } from './styles';
import { changeMeet } from '../../store/modules/meet/actions';

export default function NewMeet({ match }) {
  const dispatch = useDispatch();
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
    console.tron.log(data);
    try {
      const { title, description, localization, date, banner_id } = data;

      const submitMeet = {
        id: meet,
        title,
        description,
        localization,
        date,
        banner_id,
      };
      console.tron.log(submitMeet);

      if (meet) {
        console.tron.log('put');
        await api.put('/meetups', submitMeet);
        toast.success('Meetup successfuly updated.');
      } else {
        console.tron.log('post');
        await api.post('/meetups', submitMeet);
        toast.success('Meetup successfuly created.');
      }

      dispatch(changeMeet());
    } catch (err) {
      toast.error('Check your input data.');
    }
  }

  return (
    <Container>
      <Form initialData={chooseMeet} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Meetup Title" />
        <Input name="description" placeholder="Description" multiline />
        <Input name="date" placeholder="Meetup Date" />
        <Input name="localization" placeholder="Location" />

        <button type="submit">
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
