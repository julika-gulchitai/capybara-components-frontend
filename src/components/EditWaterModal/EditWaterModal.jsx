import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { getLocaleTime } from '../../services/getLocaleTime';
import { selectNotes } from '../../redux/Water/selectors.js';
import { apiEditWaterPortion } from '../../redux/Water/WaterThunks.js';
import { selectSelectedWaterPortionId } from '../../redux/Water/selectors.js';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import {
  AddEditWater,
  EditWaterText,
  TextAmount,
  StyledPlusIcon,
  StyledMinusIcon,
  ButtonWrapper,
  FormStyled,
  ButtonSaveWrapper,
  StyledEditWaterModal,
  GlassStyle,
  GlassContainer,
  TimeValue,
} from './EditWaterModal.styled.js';

const WATER_AMOUNT_DIFFERENCE = 20;

const EditWaterModal = ({ onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedWaterPortionId = useSelector(selectSelectedWaterPortionId);

  const waterVolumes = useSelector(selectNotes);
  const waterPortion = waterVolumes.find(
    (portion) => portion._id === selectedWaterPortionId
  );

  const [localWaterAmount, setLocalWaterAmount] = useState(
    waterPortion.waterAmount
  );
  const {
    handleSubmit,
    values: { date, waterAmount },
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      waterAmount: waterPortion.waterAmount.toString(),
      date: `${getLocaleTime(waterPortion.date)}`,
    },
    onSubmit: (values) => {
      dispatch(
        apiEditWaterPortion({
          portionId: selectedWaterPortionId,
          formData: values,
        })
      )
        .unwrap()
        .then(() => {
          dispatch(onClose());
        });
    },
  });

  const handleBlur = () => {
    setFieldValue(
      'waterAmount',
      localWaterAmount ? localWaterAmount.toString() : '0'
    );
  };

  const handleEditWaterAmount = () => {
    const number = Number.parseInt(waterAmount) + WATER_AMOUNT_DIFFERENCE;

    setFieldValue('waterAmount', number.toString());
  };

  const handleReduceWaterAmount = () => {
    const number = Number.parseInt(waterAmount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue('waterAmount', number <= 0 ? '0' : number.toString());
  };

  return (
    <StyledEditWaterModal onSubmit={handleSubmit}>
      <AddEditWater>Edit the entered amount of water</AddEditWater>
      <GlassContainer>
        <GlassStyle />
        <TextAmount>
          {waterPortion.waterAmount}
          {t('ml')}
        </TextAmount>
        <TimeValue>
          {format(waterPortion.date, 'hh')}:{format(waterPortion.date, 'mm')}{' '}
          {format(waterPortion.date, 'a')}
        </TimeValue>
      </GlassContainer>

      <EditWaterText>Correct entered data</EditWaterText>
      <TextAmount>{t('addModal.Amount of water')}:</TextAmount>

      <ButtonWrapper>
        <button onClick={handleReduceWaterAmount} name="minus" type="button">
          <StyledMinusIcon aria-label="minus_button" />{' '}
        </button>
        <span className="water-amount-value">
          {waterAmount}
          {t('ml')}
        </span>
        <button onClick={handleEditWaterAmount} name="plus" type="button">
          <StyledPlusIcon aria-label="plus_button" />{' '}
        </button>
      </ButtonWrapper>

      <FormStyled>
        <label>
          {t('addModal.Recording time')}:
          <TimePicker
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
    </StyledEditWaterModal>
  );
};

export default EditWaterModal;
