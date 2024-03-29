import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  createTheme,
  FormControl,
  FormHelperText,
  OutlinedInput,
  ThemeProvider,
} from '@mui/material';

import { selectTheme } from '../redux/global/selectors.js';

import { themeDark, themeLight } from '../css/variablesTheme.js';

function TextInput({
  type,
  id,
  width,
  register,
  error,
  placeholder,
  defaultValue,
  autoComplete = 'on',
}) {
  const currentTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(themeLight);
  useEffect(() => {
    currentTheme === 'dark' ? setTheme(themeDark) : setTheme(themeLight);
  }, [currentTheme, theme]);

  const themeText = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                border: '1px solid',
                borderColor: error
                  ? theme.colors.secondaryRed
                  : theme.colors.secondaryLightblue,
              },
            },

            '&.Mui-focused': {
              '.MuiOutlinedInput-notchedOutline': {
                border: '1px solid',
                borderColor: error
                  ? theme.colors.secondaryRed
                  : theme.colors.secondaryLightblue,
              },
            },

            backgroundColor: theme.colors.mainBg,
            width: `${width}px`,
            height: '44px',

            '& input::placeholder': {
              color: theme.colors.secondaryBlue,
              opacity: 1,
            },

            '.MuiOutlinedInput-notchedOutline': {
              paddingRight: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: error
                ? theme.colors.secondaryRed
                : theme.colors.secondaryLightblue,
              m: 0,
            },
            '& .MuiOutlinedInput-input': {
              lineHeight: '1.25',
              color: error
                ? theme.colors.secondaryRed
                : theme.colors.primaryBlue,
              fontSize: 16,
              height: '44px',
              padding: '12px 10px',
              boxSizing: 'border-box',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={themeText}>
      <FormControl autoComplete={autoComplete} variant="outlined">
        <OutlinedInput
          {...register(id)}
          autoComplete={autoComplete}
          placeholder={placeholder}
          name={id}
          id={id}
          type={type}
          defaultValue={defaultValue}
        />
        <FormHelperText
          id={`${id}-helper-text`}
          sx={{
            '&.MuiFormHelperText-root': {
              margin: '0px',
              color: theme.colors.secondaryRed,
              height: '15px',
              marginTop: '-3px',
            },
          }}
        >
          {error?.message}
        </FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
}

export default TextInput;
