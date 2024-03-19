import theme from '../../css/VariablesJSX';
import { ThemeProvider } from 'styled-components';

const ThemeComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeComponent;