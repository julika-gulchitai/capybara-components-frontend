import AuthForm from '../../components/AuthForm/AuthForm';
import { Title, Wrapper } from './SignIn.styled';
import { MarginBetween, StyledNavlink } from '../SignUp/SignUp.styled';
import BottleComponent from '../../components/AuthForm/BottleComponent/BottleComponent';

const SignIn = () => {
  return (
    <Wrapper>
      <Title>Sign In</Title>
      <AuthForm />
      <MarginBetween></MarginBetween>
      <StyledNavlink to="/signup">Sign Up</StyledNavlink>
      <BottleComponent></BottleComponent>
    </Wrapper>
  );
};

export default SignIn;
