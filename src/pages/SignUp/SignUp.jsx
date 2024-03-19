import AuthForm from '../../components/AuthForm/AuthForm';
import BottleComponent from '../../components/AuthForm/BottleComponent/BottleComponent';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import {
  MarginBetween,
  StyledNavlink,
  Title,
  WraperForm,
  Wrapper,
} from './SignUp.styled';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <WraperForm>
        <Title>{t('signup')}</Title>
        <AuthForm signUp={true} />
        <MarginBetween></MarginBetween>
        <StyledNavlink to="/signin">{t('signin')}</StyledNavlink>
      </WraperForm>
      <BottleComponent></BottleComponent>
    </Wrapper>
  );
};

export default SignUp;
