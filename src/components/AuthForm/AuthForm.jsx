import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix';

import { loginThunk, registerThunk } from '../../redux/User/UserThunks';

import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';

import {
  LabelStyled,
  SignButton,
  WrapForm,
  WrapInput,
} from './AuthForm.styled';
import { paramsForNotify } from '../../constants/notifications.js';

const AuthForm = ({ signUp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t('auth.Please write valid email'))
        .required(t('forgotPass.email')),
      password: yup
        .string()
        .min(8, t('resetPass.Password must be at least 8 characters'))
        .max(64)
        .required(t('auth.Password is required')),

      repeat_password: signUp
        ? yup
            .string()
            .oneOf(
              [yup.ref('password'), null],
              t("resetPass.Passwords don't match, please try again.")
            )
            .min(8, t('resetPass.Password must be at least 8 characters'))
            .required(t('resetPass.Confirm password is required'))
        : yup.string(),
    })
    .required();

  const submit = ({ email, password }) => {
    const user = { email, password };
    if (signUp) {
      dispatch(registerThunk(user))
        .unwrap()
        .then(() => {
          navigate('/home');
          Notify.success(
            t(
              'auth.A message with a confirmation link has been sent to your email address. Please folow the link to activate your account.'
            ),
            paramsForNotify
          );
        })
        .catch((err) => {
          Notify.warning(err, paramsForNotify);
        });
    } else {
      dispatch(loginThunk(user))
        .unwrap()
        .then(() => {
          navigate('/home');
        })
        .catch((err) => {
          Notify.warning(err, paramsForNotify);
        });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: signUp ? 'onChange' : 'onSubmit',
    resolver: yupResolver(schema),
  });

  return (
    <WrapForm>
      <form onSubmit={handleSubmit(submit)}>
        <WrapInput>
          <LabelStyled>{t('enterEmail')}</LabelStyled>
          <TextInput
            register={register}
            error={errors.email}
            id="email"
            width={isDesktop ? 384 : isTablet ? 336 : 280}
            type="email"
            placeholder={t('email')}
          />
        </WrapInput>

        <WrapInput>
          <LabelStyled>{t('enterPassword')}</LabelStyled>
          <PasswordInput
            error={errors.password}
            register={register}
            id="password"
            width={isDesktop ? 384 : isTablet ? 336 : 280}
            type="password"
            placeholder={t('password')}
          />
        </WrapInput>

        {signUp && (
          <WrapInput>
            <LabelStyled>{t('repeatPassword')}</LabelStyled>
            <PasswordInput
              error={errors.repeat_password}
              register={register}
              id="repeat_password"
              width={isDesktop ? 384 : isTablet ? 336 : 280}
              type="repeat_password"
              placeholder={t('password')}
            />
          </WrapInput>
        )}

        <SignButton type="submit">
          {signUp ? t('signup') : t('signin')}
        </SignButton>
      </form>
    </WrapForm>
  );
};

export default AuthForm;
