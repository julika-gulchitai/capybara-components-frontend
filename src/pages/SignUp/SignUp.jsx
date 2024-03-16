import AuthForm from '../../components/AuthForm/AuthForm';
import BottleComponent from '../../components/AuthForm/BottleComponent/BottleComponent';

import { MarginBetween, StyledNavlink, Title, WraperForm, Wrapper } from './SignUp.styled';

const SignUp = () => {
  return (
    <Wrapper>
      <WraperForm>
        <Title>Sign Up</Title>
        <AuthForm signUp={true} />
        <MarginBetween></MarginBetween>
        <StyledNavlink to="/signin">Sign In</StyledNavlink>
      </WraperForm>
      <BottleComponent></BottleComponent>
    </Wrapper>
  );
};

export default SignUp;
