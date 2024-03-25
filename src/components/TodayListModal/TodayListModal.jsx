import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import moment from 'moment';

import { apiAddWaterPortion } from '../../redux/Water/WaterThunks';

import {
  AddWater,
  TextChoose,
  TextAmount,
  ButtonWrapper,
  FormStyled,
  ButtonSaveWrapper,
  StyledAddWaterModal,
  StyledTimePicker,
} from './TodayListModal.styled';
import 'rc-time-picker/assets/index.css';
import svgSprite from '../../assets/sprite.svg';
import { selectSelectedCalendar } from '../../redux/Water/selectors.js';
import { doesRefreshNeeded } from '../../services/doesRefreshNeeded.js';

const WATER_AMOUNT_DIFFERENCE = 50;

const TodayListModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const selectedCalendar = useSelector(selectSelectedCalendar);

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
      date: moment().format('HH:mm'),
    },
    onSubmit: (values) => {
      dispatch(
        apiAddWaterPortion({
          credentials: values,
          shouldUpdateMonth: doesRefreshNeeded(selectedCalendar),
        })
      )
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

  function handleValueChange(value) {
    setLocalWaterAmount(
      Number.parseInt(!isNaN(Number.parseInt(value)) ? value : 0)
    );
  }

  return (
    <StyledAddWaterModal onSubmit={handleSubmit}>
      <AddWater>{t('addWater')}</AddWater>
      <TextChoose>{t('addModal.Choose a value')}</TextChoose>
      <TextAmount>{t('addModal.Amount of water')}:</TextAmount>

      <ButtonWrapper>
        <button onClick={handleReduceWaterAmount} name="minus" type="button">
          <svg>
            <use href={`${svgSprite}#icon-minus`} />
          </svg>
        </button>
        <span className="water-amount-value">
          {waterAmount}
          {t('ml')}
        </span>
        <button onClick={handleAddWaterAmount} name="plus" type="button">
          <svg>
            <use href={`${svgSprite}#icon-plus`} />
          </svg>
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
            onChange={({ target: { value } }) => handleValueChange(value)}
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
