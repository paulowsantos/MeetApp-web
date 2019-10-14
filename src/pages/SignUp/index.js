import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/M.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Must insert a name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Must insert email'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters or longer')
    .required('Must insert password'),
});

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Sign Up</button>
        <Link to="/">Already a member</Link>
      </Form>
    </>
  );
}
