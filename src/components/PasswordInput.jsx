import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  createSvgIcon,
  createTheme,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  ThemeProvider,
} from '@mui/material';

import { selectTheme } from '../redux/global/selectors.js';

import { themeDark, themeLight } from '../css/variablesTheme.js';

import svgSprite from '../assets/sprite.svg';

function PasswordInput({
  id,
  width,
  register,
  error,
  placeholder = 'Password',
  autoComplete = 'on',
}) {
  const currentTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(themeLight);
  useEffect(() => {
    currentTheme === 'dark' ? setTheme(themeDark) : setTheme(themeLight);
  }, [currentTheme, theme]);

  const [showPassword, setShowPassword] = React.useState(false);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  const themePassword = createTheme({
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
    <ThemeProvider theme={themePassword}>
      <FormControl autoComplete={autoComplete} variant="outlined">
        <OutlinedInput
          {...register(id)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          name={id}
          id={id}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <EyeSlashedIcon
                    fontSize="small"
                    sx={{ color: theme.colors.primaryBlue, fontSize: 16 }}
                  />
                ) : (
                  <EyeIcon
                    sx={{ color: theme.colors.primaryBlue, fontSize: 16 }}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
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

const EyeIcon = createSvgIcon(
  <svg fill="currentColor" viewBox="0 0 16 16">
    <use href={`${svgSprite}#icon-visible`} />
  </svg>,
  'Plus'
);

const EyeSlashedIcon = createSvgIcon(
  <svg fill="currentColor" viewBox="0 0 16 16">
    <use href={`${svgSprite}#icon-hidden`} />
  </svg>,
  'Plus'
);

export default PasswordInput;
