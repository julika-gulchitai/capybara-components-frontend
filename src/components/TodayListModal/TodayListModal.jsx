import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { apiAddWaterPortion } from '../../redux/Water/WaterThunks';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import { format } from 'date-fns';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import {
  AddWater,
  TextChoose,
  TextAmount,
  StyledPlusIcon,
  StyledMinusIcon,
  ButtonWrapper,
  FormStyled,
  ButtonSaveWrapper,
  StyledAddWaterModal,
  StyledTimePicker,
} from './TodayListModal.styled';

const WATER_AMOUNT_DIFFERENCE = 20;

const TodayListModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [localWaterAmount, setLocalWaterAmount] = useState(250);
  const {
    handleSubmit,
    values: { date, waterAmount },
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      waterAmount: '250',
      date: `${format(new Date(), 'HH')}:${format(new Date(), 'mm')}`,
    },
    onSubmit: (values) => {
      dispatch(apiAddWaterPortion(values))
        .unwrap()
        .then(() => {
          onClose();
        });
    },
  });

  const handleBlur = () => {
    setFieldValue(
      'waterAmount',
      localWaterAmount ? localWaterAmount.toString() : '0'
    );
  };

  const handleAddWaterAmount = () => {
    const newWaterAmounter =
      Number.parseInt(waterAmount) + WATER_AMOUNT_DIFFERENCE;
    setFieldValue('waterAmount', newWaterAmounter.toString());
    setLocalWaterAmount(newWaterAmounter);
  };
  const handleReduceWaterAmount = () => {
    const newWaterAmounter =
      Number.parseInt(waterAmount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue(
      'waterAmount',
      newWaterAmounter <= 0 ? '0' : newWaterAmounter.toString()
    );
    setLocalWaterAmount(newWaterAmounter <= 0 ? 0 : newWaterAmounter);
  };

  return (
    <StyledAddWaterModal onSubmit={handleSubmit}>
      <AddWater>{t('addWater')}</AddWater>
      <TextChoose>{t('addModal.Choose a value')}</TextChoose>
      <TextAmount>{t('addModal.Amount of water')}:</TextAmount>

      <ButtonWrapper>
        <button onClick={handleReduceWaterAmount} name="minus" type="button">
          <StyledMinusIcon aria-label="minus_button" />{' '}
        </button>
        <span className="water-amount-value">
          {waterAmount}
          {t('ml')}
        </span>
        <button onClick={handleAddWaterAmount} name="plus" type="button">
          <StyledPlusIcon aria-label="plus_button" />{' '}
        </button>
      </ButtonWrapper>

      <FormStyled>
        <label>
          {t('addModal.Recording time')}:
          <StyledTimePicker
            defaultValue={moment(date, 'HH:mm')}
            showSecond={false}
            minuteStep={5}
            onChange={(value) => {
              setFieldValue('date', value && value.format('HH:mm'));
            }}
          />
          {errors.date ? <div>{errors.date}</div> : null}
        </label>

        <label>
          {t('addModal.Enter the value of the water used')}:
          <input
            name="number"
            value={localWaterAmount}
            onBlur={handleBlur}
            onChange={({ target: { value } }) =>
              setLocalWaterAmount(Number.parseInt(value))
            }
          />
          {errors.waterAmount ? <div>{errors.waterAmount}</div> : null}
        </label>

        <ButtonSaveWrapper>
          <p>
            {waterAmount}
            {t('ml')}
          </p>
          <button disabled={Object.keys(errors).length > 0} type="submit">
            {t('save')}
          </button>
        </ButtonSaveWrapper>
      </FormStyled>
    </StyledAddWaterModal>
  );
};

export default TodayListModal;
