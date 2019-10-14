import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/M.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Must insert email'),
  password: Yup.string().required('Must insert password'),
});

export default function SignIn() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Sign In</button>
        <Link to="/register">Sign up for free</Link>
      </Form>
    </>
  );
}
