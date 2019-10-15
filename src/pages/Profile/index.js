import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Email" />

        <hr />

        <Input name="password" type="password" placeholder="Password" />
        <Input name="newPassword" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
        />

        <button type="submit">
          <MdAddCircleOutline size={20} style={{ marginRight: '6px' }} />
          Save
        </button>
      </Form>
    </Container>
  );
}
