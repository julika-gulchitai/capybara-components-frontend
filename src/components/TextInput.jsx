import React from 'react';
import {createTheme, FormControl, FormHelperText, OutlinedInput, ThemeProvider} from '@mui/material';

function TextInput({
  type,
  id,
  width,
  register,
  error,
  placeholder,
  defaultValue,
}) {

 const themeText = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                border: '1px solid',
                borderColor: error ? '#ef5050' : '#d7e3ff',
              }
            },

            '&.Mui-focused': {
              '.MuiOutlinedInput-notchedOutline': {
                border: '1px solid',
                borderColor: error ? '#ef5050' : '#d7e3ff',
              }
            },

            backgroundColor:'#fff',
            width: `${width}px`,
            height: '44px',

            "& input::placeholder": {
              color: '#9ebbff',
              opacity: 1
            },

            '.MuiOutlinedInput-notchedOutline': {
              paddingRight: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: error ? '#ef5050' : '#d7e3ff',
              m: 0,
            },
            '& .MuiOutlinedInput-input': {
              lineHeight: '1.25',
              color: error ? '#ef5050' : '#407bff',
              fontSize: 16,
              height: '44px',
              padding: '12px 10px',
              boxSizing: 'border-box'
            }
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={themeText}>
    <FormControl
      variant="outlined"
    >
      <OutlinedInput
        {...register(id)}
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
            color: '#ef5050',
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
