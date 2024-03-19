import AuthForm from '../../components/AuthForm/AuthForm';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import {
  MarginBetween,
  StyledNavlink,
  Title,
  WraperForm,
  Wrapper,
} from '../SignUp/SignUp.styled';
import BottleComponent from '../../components/AuthForm/BottleComponent/BottleComponent';
import { Notify } from 'notiflix';

const SignIn = () => {
  const params = new URLSearchParams(window.location.search);
  const message = params.get('message');

  if (message) {
    Notify.success('You have activated your account. Now you can login.', {
      timeout: 5000,
      width: '460px',
      height: '200px',
      messageMaxLength: 500,
      fontSize: '14px',
      position: 'center-top',
    });
  }
  const { t } = useTranslation();

  return (
    <Wrapper>
      <WraperForm>
        <Title>{t('signin')}</Title>
        <AuthForm />
        <MarginBetween></MarginBetween>
        <StyledNavlink to="/signup">{t('signup')}</StyledNavlink>
        <StyledNavlink to="/forgot_password">
          {t('forgotPassword')}
        </StyledNavlink>
      </WraperForm>
      <BottleComponent></BottleComponent>
    </Wrapper>
  );
};

export default SignIn;
