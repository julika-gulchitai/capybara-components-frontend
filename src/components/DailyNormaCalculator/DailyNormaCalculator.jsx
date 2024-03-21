import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectUser } from '../../redux/User/selectors';

import {
  InputWrapper,
  RequiredNorma,
  WeightAndSports,
} from '../DailyNormaModal/DailyNormaModal.styled';
import { Error } from './DailyNormaCalculator.styled';

const schema = yup.object({
  weight: yup
    .number()
    .typeError('Weight must be a number')
    .min(3, 'Weight must be more than 3kg')
    .max(300, 'Weight must be less than 300kg'),
  sports: yup
    .number()
    .typeError('Time must be a number')
    .positive('Time must be more than 0'),
});

const DailyNormaCalculator = () => {
  const { gender } = useSelector(selectUser);

  const [weight, setWeight] = useState('0');
  const [sports, setSports] = useState('0');
  const [dailyNorma, setDailyNorma] = useState('1.8');

  const [isFemale, setIsFemale] = useState(() => getGenderForState());

  const {
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      weight: '',
      sports: '',
    },
  });

  useEffect(() => {
    if (isFemale && weight > 0) {
      const norma = weight * 0.03 + sports * 0.4;
      setDailyNorma(norma.toFixed(1));
    }
    if (!isFemale && weight > 0) {
      const norma = weight * 0.04 + sports * 0.6;
      setDailyNorma(norma.toFixed(1));
    }
  }, [weight, sports, isFemale, setDailyNorma]);

  function getGenderForState() {
    if (gender === 'female' || gender === null) {
      return true;
    } else {
      return false;
    }
  }

  function getGender() {
    if (gender === 'female' || gender === null) {
      return 'female';
    } else {
      return 'male';
    }
  }

  return (
    <>
      <form>
        <RadioGroup
          defaultValue={getGender()}
          name="radio-buttons-group"
          row
          sx={{
            marginBottom: '16px',
          }}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="For woman"
            onChange={() => setIsFemale(true)}
            sx={{
              '& .MuiSvgIcon-root': {
                fontSize: 18,
              },
              '& .MuiFormControlLabel-label': {
                fontSize: 16,
                lineHeight: 1.25,
                letterSpacing: '0',
              },
              '& .MuiRadio-colorPrimary': {
                color: '#407bff',
              },
              '& .MuiRadio-colorPrimary.Mui-checked': {
                color: '#407bff',
              },
            }}
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="For man"
            onChange={() => setIsFemale(false)}
            sx={{
              '& .MuiSvgIcon-root': {
                fontSize: 18,
              },
              '& .MuiFormControlLabel-label': {
                fontSize: 16,
                lineHeight: 1.25,
              },
              '& .MuiRadio-colorPrimary': {
                color: '#407bff',
              },
              '& .MuiRadio-colorPrimary.Mui-checked': {
                color: '#407bff',
              },
            }}
          />
        </RadioGroup>
        <WeightAndSports>
          <InputWrapper>
            <label htmlFor="weight">Your weight in kilograms:</label>
            <Controller
              name="weight"
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <input
                  id="weight"
                  {...field}
                  onChange={({ target: { value } }) => {
                    onChange(value);
                    setWeight(value);
                  }}
                  placeholder="0"
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = '0')}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(
                      /(\.\d{1})\d+/,
                      '$1'
                    );
                    e.target.value = e.target.value.replace(',', '.');
                  }}
                  autoComplete="off"
                />
              )}
            />
            {errors.weight && weight !== '' && (
              <Error>{errors.weight.message}</Error>
            )}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="sports">
              The time of active participation in sports or other activities
              with a high physical load in hours:
            </label>
            <Controller
              name="sports"
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <input
                  id="sports"
                  {...field}
                  onChange={({ target: { value } }) => {
                    onChange(value);
                    setSports(value);
                  }}
                  placeholder="0"
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = '0')}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(
                      /(\.\d{1})\d+/,
                      '$1'
                    );
                    e.target.value = e.target.value.replace(',', '.');
                  }}
                  autoComplete="off"
                />
              )}
            />
            {errors.sports && sports !== '' && (
              <Error>{errors.sports.message}</Error>
            )}
          </InputWrapper>
        </WeightAndSports>
      </form>
      <RequiredNorma>
        <p>The required amount of water in liters per day:</p>
        <p>
          <span>{dailyNorma} L</span>
        </p>
      </RequiredNorma>
    </>
  );
};

export default DailyNormaCalculator;
