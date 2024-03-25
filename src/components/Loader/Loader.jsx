import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ThreeDots } from 'react-loader-spinner';

import { selectTheme } from '../../redux/global/selectors';

import { themeDark, themeLight } from '../../css/variablesTheme';
import { Loading } from './Loader.styled';

export const Loader = ({ visible }) => {
  const currentTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(themeLight);
  useEffect(() => {
    currentTheme === 'dark' ? setTheme(themeDark) : setTheme(themeLight);
  }, [currentTheme, theme]);

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
