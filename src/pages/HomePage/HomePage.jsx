import { Container, Block, Title, StyledLink } from './HomePage.styled';

const SecondPage = () => {
  return (
    <Container>
      <Block>
        <Title>Home</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SecondPage;
