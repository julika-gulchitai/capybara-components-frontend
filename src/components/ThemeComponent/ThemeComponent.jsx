import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { selectTheme } from '../../redux/global/selectors';

import { themeLight, themeDark } from '../../css/variablesTheme';

const ThemeComponent = ({ children }) => {
  const currentTheme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? themeDark : themeLight}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
