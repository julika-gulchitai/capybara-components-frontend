import { useForm } from 'react-hook-form';
import {
  LabelStyled,
  SignButton,
  WrapForm,
  WrapInput,
} from './AuthForm.styled';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';

const AuthForm = ({ signUp }) => {
  const schema = yup
    .object()
    .shape({
      email: yup.string(),
      password: yup
        .string()
        .test(
          'len',
          'Must be at least 8 characters',
          (val) => (val.length >= 8 && val.length <= 64) || val.length === 0
        ),
      ...(signUp && {
        repeat_password: yup
          .string()
          .test(
            'len',
            'Must be at least 8 characters',
            (val) => (val.length >= 8 && val.length <= 64) || val.length === 0
          ),
      }),
    })
    .required();

  const submit = (data) => {
    console.log(data);
    //dispatch(registerThunk(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <WrapForm>
      <form onSubmit={handleSubmit(submit)}>
        <WrapInput>
          <LabelStyled>Enter your email</LabelStyled>
          <TextInput
            register={register}
            error={errors.email}
            id="email"
            width={280}
            type="email"
            placeholder="E-mail"
          />
        </WrapInput>

        <WrapInput>
          <LabelStyled>Enter your password</LabelStyled>
          <PasswordInput
            error={errors.password}
            register={register}
            id="password"
            width={280}
            type="password"
            placeholder="Password"
          />
        </WrapInput>

        {signUp && (
          <WrapInput>
            <LabelStyled>Repeat password</LabelStyled>
            <PasswordInput
              error={errors.repeat_password}
              register={register}
              id="repeat_password"
              width={280}
              type="repeat_password"
              placeholder="Password"
            />
          </WrapInput>
        )}

        <SignButton type="submit">{signUp ? 'Sign Up' : 'Sign In'}</SignButton>
      </form>
    </WrapForm>
  );
};

export default AuthForm;
