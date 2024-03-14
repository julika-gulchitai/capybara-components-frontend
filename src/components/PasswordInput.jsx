import React from 'react';
import {
  createSvgIcon,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import svgSprite from '../assets/sprite.svg';

function PasswordInput({
  id,
  width,
  register,
  error,
  placeholder = 'Password',
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  return (
    <FormControl
      sx={{
        m: 0,
        width: `${width}px`,
        '& .MuiOutlinedInput-root': {
          paddingRight: '12px',

          '& fieldset': {
            boxSizing: 'border-box',
            borderRadius: '6px',
            border: '1px solid',
            borderColor: error ? '#ef5050' : '#d7e3ff',
            height: '53px',
            top: '-10px',
            m: 0,
          },
          '&:hover fieldset': {
            border: '1px solid',
            borderColor: error ? '#ef5050' : '#d7e3ff',
          },
          '&.Mui-focused fieldset': {
            border: '1px solid',
            borderColor: error ? '#ef5050' : '#d7e3ff',
          },
        },

        '& .MuiInputBase-input': {
          boxSizing: 'border-box',
          width: '100%',
          lineHeight: '1.25',
          color: error ? '#ef5050' : '#407bff',
          fontSize: 16,
          height: '44px',
          padding: '12px 10px',
          fontFamily: [].join(','),
          backgroundColor: 'white',
        },
      }}
      variant="outlined"
    >
      <OutlinedInput
        {...register(id)}
        placeholder={placeholder}
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
                  sx={{ color: '#407bff', fontSize: 16 }}
                />
              ) : (
                <EyeIcon sx={{ color: '#407bff', fontSize: 16 }} />
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
            color: '#ef5050',
            height: '15px',
            marginTop: '-3px',
          },
        }}
      >
        {error?.message}
      </FormHelperText>
    </FormControl>
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
