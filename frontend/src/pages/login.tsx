import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../components/text-field';
import useUser from '../contexts/user-context';
import { PrimaryButton } from '../styled/primary-button';
import { ITheme } from '../templates/main-template';

export default function LoginPage() {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = e.currentTarget;
    if (login(username.value, password.value)) {
      navigate('/home');
    }
  };

  const theme: ITheme = useTheme() as ITheme;

  const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
  `;

  return (
    <Form onSubmit={handleOnSubmit}>
      <TextField name="username" label="Username" />
      <TextField type="password" name="password" label="Password" />
      <PrimaryButton theme={theme}>Login</PrimaryButton>
    </Form>
  );
}
