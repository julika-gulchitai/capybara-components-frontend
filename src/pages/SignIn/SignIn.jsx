import AuthForm from '../../components/AuthForm/AuthForm';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import {
  BackgroundContainer,
  ForgotNavLink,
  MarginBetween,
  SignContainer,
  StyledNavlink,
  Title,
  WraperForm,
} from '../SignUp/SignUp.styled';
import { Notify } from 'notiflix';

const SignIn = () => {
  const params = new URLSearchParams(window.location.search);
  const message = params.get('message');

  if (message) {
    Notify.success(
      t('signIn.You have activated your account. Now you can login.'),
      {
        timeout: 5000,
        width: '460px',
        height: '200px',
        messageMaxLength: 500,
        fontSize: '14px',
        position: 'center-top',
      }
    );
  }
  const { t } = useTranslation();

  return (
    <BackgroundContainer>
      <SignContainer>
        <WraperForm>
          <Title>{t('signin')}</Title>
          <AuthForm />
          <MarginBetween></MarginBetween>
          <StyledNavlink to="/signup">{t('signup')}</StyledNavlink>
          <ForgotNavLink to="/forgot-password">
            {t('forgotPassword')}
          </ForgotNavLink>
        </WraperForm>
      </SignContainer>
    </BackgroundContainer>

  );
};

export default SignIn;
