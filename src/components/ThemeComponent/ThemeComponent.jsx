import { themeLight, themeDark } from '../../css/variablesTheme';
import { ThemeProvider } from 'styled-components';

const ThemeComponent = ({ isDark, children }) => {
  return <ThemeProvider theme={isDark ? themeDark : themeLight}>{children}</ThemeProvider>
}

export default ThemeComponent;


// import { useSelector } from 'react-redux';
// import { themeLight, themeDark } from '../../css/variablesTheme';
// import { ThemeProvider } from 'styled-components';
// import { selectUser } from '../../redux/User/selectors';

// const ThemeComponent = ({ children }) => {
//   const { theme: currentTheme } = useSelector(selectUser)
//   return <ThemeProvider theme={(currentTheme === 'light') ? themeLight : themeDark}>{children}</ThemeProvider>
// }

// export default ThemeComponent;