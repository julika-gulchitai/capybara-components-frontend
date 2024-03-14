import { useForm, Controller } from 'react-hook-form';
import { StyledInput } from './AuthForm.styled';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const schema = yup
    .object({
      email: yup.string(),
      password: yup
        .string()
        .test(
          'len',
          'Must be at least 8 characters',
          (val) => (val.length >= 8 && val.length <= 64) || val.length === 0
        ),
      repeat_password: yup
        .string()
        .test(
          'len',
          'Must be at least 8 characters',
          (val) => (val.length >= 8 && val.length <= 64) || val.length === 0
        ),
    })
    .required();

  const submit = (data) => {
    console.log(data);
    //dispatch(registerThunk(data));
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">Enter your name</label>
        <TextInput
          register={register}
          error={errors.email}
          id="email"
          width={280}
          type="email"
          placeholder="E-mail"
        />
        <label htmlFor="password">Enter your password</label>
        <PasswordInput
          error={errors.password}
          register={register}
          id="password"
          width={280}
          type="password"
          placeholder="Password"
        />
        <label htmlFor="repeat_password">Repeat password</label>
        <PasswordInput
          error={errors.repeat_password}
          register={register}
          id="repeat_password"
          width={280}
          type="repeat_password"
          placeholder="Password"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default AuthForm;
