import AuthForm from '../../components/AuthForm/AuthForm';

import { MarginBetween, StyledNavlink, Title, WraperForm, Wrapper } from '../SignUp/SignUp.styled';
import BottleComponent from '../../components/AuthForm/BottleComponent/BottleComponent';




const SignIn = () => {


  return (
    <Wrapper>
      <WraperForm>
        <Title>Sign In</Title>
        <AuthForm />
        <MarginBetween></MarginBetween>
        <StyledNavlink to="/signup">Sign Up</StyledNavlink>
      </WraperForm>
      <BottleComponent></BottleComponent>
    </Wrapper>
  );
};

export default SignIn;
