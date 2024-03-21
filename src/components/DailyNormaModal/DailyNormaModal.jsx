import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Notify } from 'notiflix';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { editWaterRateThunk } from '../../redux/User/UserThunks';

import DailyNormaCalculator from '../DailyNormaCalculator/DailyNormaCalculator';

import { paramsForNotify } from '../../constants/notifications';
import {
  BtnWrapper,
  DailyNorma,
  DailyNormaContainer,
  Error,
  Explanation,
  Formula,
} from './DailyNormaModal.styled';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

const schema = yup.object({
  norma: yup
    .string()
    .matches(
      /^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,
      'It must be a number in a range from 0.1 to 15 (one digit after the decimal point)'
    )
    .required(),
});

const DailyNormaModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    const waterRate = data.norma * 1000;
    const newWaterRate = { waterRate: waterRate.toString() };

    dispatch(editWaterRateThunk(newWaterRate))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch((error) => {
        Notify.failure(error.message, paramsForNotify);
      });
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
      <DailyNormaCalculator />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
