import { ThreeDots } from 'react-loader-spinner';
import { Loading } from './Loader.styled';
// import theme from '../../css/VariablesJSX'
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/global/selectors';
import { useEffect, useState } from 'react';
import { themeDark, themeLight } from '../../css/variablesTheme';


export const Loader = ({ visible }) => {
  const currentTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(themeLight)
  useEffect(() => {
    (currentTheme === 'dark') ? setTheme(themeDark) : setTheme(themeLight)
  }, [currentTheme, theme])

  return (
    <Loading>
      <ThreeDots
        height="100"
        width="100"
        visible={visible}
        color={theme.colors.primaryBlue}
        ariaLabel="dots-loading"
      />
    </Loading>
  );
};
