import AuthForm from '../../components/AuthForm/AuthForm';

import { MarginBetween, StyledNavlink, Title, WraperForm, Wrapper } from '../SignUp/SignUp.styled';
import BottleComponent from '../../components/AuthForm/BottleComponent/BottleComponent';
import { Notify } from 'notiflix';




const SignIn = () => {

const params = new URLSearchParams(window.location.search);
const message = params.get('message');
console.log(message)
if (message) {
  Notify.success(
    'You have activated your account. Now you can login.',
    {
      timeout: 5000,
      width: '460px',
      height:'200px',
      messageMaxLength:500,
      fontSize:"14px",
      position:"center-top",
    }
  ); 
}

  return (
    <Wrapper>
      <WraperForm>
        <Title>Sign In</Title>
        <AuthForm />
        <MarginBetween></MarginBetween>
        <StyledNavlink to="/signup">Sign Up</StyledNavlink>
        <StyledNavlink to='/forgot_password'>Forgot your password?</StyledNavlink>
      </WraperForm>
      <BottleComponent></BottleComponent>
    </Wrapper>
  );
};

export default SignIn;
