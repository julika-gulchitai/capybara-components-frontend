import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Notify } from 'notiflix';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

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

const DailyNormaModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const schema = yup.object({
    norma: yup
      .string()
      .matches(
        /^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,
        t('normaModal.normaError')
      )
      .required(),
  });

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
      <h2>{t('normaModal.My daily norma')}</h2>
      <Formula>
        <p>
          {t('normaModal.formulaGenderF')}: <span>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p>
          {t('normaModal.formulaGenderM')}: <span>V=(M*0,04) + (T*0,6)</span>
        </p>
      </Formula>
      <Explanation>
        <span>*</span> {t('normaModal.explanation')}
      </Explanation>
      <h3>{t('normaModal.Calculate your rate')}:</h3>
      <DailyNormaCalculator />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <DailyNorma>
          <label htmlFor="norma">
            {t('normaModal. Write down how much water you will drink')}:
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
          <ButtonStyled type="submit">{t('save')}</ButtonStyled>
        </BtnWrapper>
      </form>
    </DailyNormaContainer>
  );
};

export default DailyNormaModal;
