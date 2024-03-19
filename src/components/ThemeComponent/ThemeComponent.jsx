import { themeLight, themeDark } from '../../css/variablesTheme';
import { ThemeProvider } from 'styled-components';

const ThemeComponent = ({ isDark, children }) => {
  return <ThemeProvider theme={isDark ? themeDark : themeLight}>{children}</ThemeProvider>
}

export default ThemeComponent;