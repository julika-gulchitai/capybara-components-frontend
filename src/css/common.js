import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
  padding: 0;
}
img {
  display: block;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  cursor: pointer;
}
body{
  background-color: ${props => props.theme.colors.mainBg};
  min-height: 100svh;
  color: ${props => props.theme.colors.textColor};
  background-repeat: no-repeat;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-webkit-autofill:active { 
    color: ${props => props.theme.colors.primaryBlue};
    transition: background-color 5000s ease-in-out 0s;
}
@media screen and (min-width: 768px) and (max-width: 1440px) {
    min-height: 100svh;
}
@media screen and (max-width: 767px) {
  body {
    height: fit-content;
    min-height: 100svh;
  }
}
`;

export default Global;
