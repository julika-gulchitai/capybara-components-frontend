import { Container, Title, StyledImage } from './WelcomePage.styled';
import example from '../../assets/example.png';

const FirstPage = () => {
  return (
    <Container>
      <Title>Welcome</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
