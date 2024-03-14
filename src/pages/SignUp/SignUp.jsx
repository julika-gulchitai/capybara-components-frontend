import AuthForm from '../../components/AuthForm/AuthForm';
import BottleComponent from '../../components/AuthForm/BottleComponent/BottleComponent';

import { MarginBetween, StyledNavlink, Title, Wrapper } from './SignUp.styled';

const SignUp = () => {
  return (
    <Wrapper>
      <Title>Sign Up</Title>

      <AuthForm signUp={true} />
      <MarginBetween></MarginBetween>
      <StyledNavlink to="/signin">Sign In</StyledNavlink>
      <BottleComponent></BottleComponent>
    </Wrapper>
  );
};

export default SignUp;
