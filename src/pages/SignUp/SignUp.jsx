import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import AuthForm from '../../components/AuthForm/AuthForm';

import {
  BackgroundContainer,
  MarginBetween,
  SignContainer,
  StyledNavlink,
  Title,
  WraperForm,
} from './SignUp.styled';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <BackgroundContainer>
      <SignContainer>
        <WraperForm>
          <Title>{t('signup')}</Title>
          <AuthForm signUp={true} />
          <MarginBetween></MarginBetween>
          <StyledNavlink to="/signin">{t('signin')}</StyledNavlink>
        </WraperForm>
      </SignContainer>
    </BackgroundContainer>
  );
};

export default SignUp;
