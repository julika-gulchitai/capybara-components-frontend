import { useSelector } from 'react-redux';
import { themeLight, themeDark } from '../../css/variablesTheme';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from '../../redux/global/selectors';

const ThemeComponent = ({ children }) => {
  const currentTheme = useSelector(selectTheme);
  return <ThemeProvider theme={(currentTheme === 'dark') ? themeDark : themeLight}>{children}</ThemeProvider>
}

export default ThemeComponent;
