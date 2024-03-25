import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import AuthForm from '../../components/AuthForm/AuthForm';

import {
  BackgroundContainer,
  ForgotNavLink,
  MarginBetween,
  SignContainer,
  StyledNavlink,
  Title,
  WraperForm,
} from '../SignUp/SignUp.styled';

const SignIn = () => {
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
