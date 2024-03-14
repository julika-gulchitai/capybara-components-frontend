import AuthForm from '../../components/AuthForm/AuthForm';

import { MarginBetween, StyledNavlink, Title, Wrapper } from './SignUp.styled';

const SignUp = () => {
  return (
    <Wrapper>
      <Title>Sign Up</Title>

      <AuthForm signUp={false} />
      <MarginBetween></MarginBetween>
      <StyledNavlink to="/signin">Sign In</StyledNavlink>
    </Wrapper>
  );
};

export default SignUp;
