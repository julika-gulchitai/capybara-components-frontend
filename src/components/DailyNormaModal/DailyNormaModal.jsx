import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/User/selectors';

import { Notify } from 'notiflix';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { editWaterRateThunk } from '../../redux/User/UserThunks';

import { paramsForNotify } from '../../constants/notifications';
import {
  BtnWrapper,
  DailyNorma,
  DailyNormaContainer,
  Error,
  Explanation,
  Formula,
  InputWrapper,
  RequiredNorma,
  WeightAndSports,
} from './DailyNormaModal.styled';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

const schema = yup.object().shape({
  norma: yup
    .string()
    .matches(
      /^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,
      'The amount of water must be a number in a range from 0.1 to 15 (one digit after the decimal point is allowed)'
    )
    .required(),
});

const DailyNormaModal = ({ onClose }) => {
  const { gender } = useSelector(selectUser);

  const [weight, setWeight] = useState('0');
  const [sports, setSports] = useState('0');
  const [dailyNorma, setDailyNorma] = useState('1.8');
  const [isFemale, setIsFemale] = useState(() => getGenderForState());

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
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
  }, [weight, sports, dailyNorma, isFemale]);

  async function onSubmit(data) {
    const waterRate = data.norma * 1000;
    const newWaterRate = { waterRate: waterRate.toString() };
    dispatch(editWaterRateThunk(newWaterRate))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch((error) => {
        console.log(error);
        Notify.failure(error.message, paramsForNotify);
      });
  }

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
    <DailyNormaContainer>
      <h2>My daily norma</h2>
      <Formula>
        <p>
          For girl: <span>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p>
          For man: <span>V=(M*0,04) + (T*0,6)</span>
        </p>
      </Formula>
      <Explanation>
        <span>*</span> V is the volume of the water norm in liters per day, M is
        your body weight, T is the time of active sports, or another type of
        activity commensurate in terms of loads (in the absence of these, you
        must set 0)
      </Explanation>
      <h3>Calculate your rate:</h3>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
            <input
              type="text"
              {...register('weight')}
              name="weight"
              id="weight"
              placeholder="0"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = '0')}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/(\.\d{1})\d+/, '$1');
                e.target.value = e.target.value.replace(',', '.');
              }}
              autoComplete="off"
            />
            {errors.weight && <Error>{errors.weight.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="sports-time">
              The time of active participation in sports or other activities
              with a high physical load in hours:
            </label>
            <input
              type="text"
              {...register('sports')}
              name="sports"
              id="sports-time"
              placeholder="0"
              onChange={(e) => setSports(e.target.value)}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = '0')}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/(\.\d{1})\d+/, '$1');
                e.target.value = e.target.value.replace(',', '.');
              }}
              autoComplete="off"
            />
          </InputWrapper>
        </WeightAndSports>
        <RequiredNorma>
          <p>The required amount of water in liters per day:</p>
          <p>
            <span>{dailyNorma} L</span>
          </p>
        </RequiredNorma>
        <DailyNorma>
          <label htmlFor="norma">
            Write down how much water you will drink:
          </label>
          <input
            type="text"
            {...register('norma', { max: 15 })}
            name="norma"
            id="norma"
            placeholder="0"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '0')}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/(\.\d{1})\d+/, '$1');
              e.target.value = e.target.value.replace(',', '.');
            }}
            autoComplete="off"
          />
          {errors.norma && <Error>{errors.norma.message}</Error>}
        </DailyNorma>
        <BtnWrapper>
          <ButtonStyled type="submit">Save</ButtonStyled>
        </BtnWrapper>
      </form>
    </DailyNormaContainer>
  );
};

export default DailyNormaModal;
