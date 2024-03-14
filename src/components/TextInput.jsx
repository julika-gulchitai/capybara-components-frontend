import React from 'react';
import { FormControl, FormHelperText, OutlinedInput } from '@mui/material';

function TextInput({
  type,
  id,
  width,
  register,
  error,
  placeholder,
  defaultValue,
}) {
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
  );
}

export default TextInput;
