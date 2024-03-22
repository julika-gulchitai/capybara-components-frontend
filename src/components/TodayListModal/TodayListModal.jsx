import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { apiAddWaterPortion } from '../../redux/Water/WaterThunks';

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
  // GlassStyle,
  // GlassContainer,
  // FormAmount,
  // TimeValue,
} from './TodayListModal.styled';

const WATER_AMOUNT_DIFFERENCE = 20;

const TodayListModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [localWaterAmount, setLocalWaterAmount] = useState(250);
  const {
    handleChange,
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

  const handleAddWaterAmount = () => {
    const number = Number.parseInt(waterAmount) + WATER_AMOUNT_DIFFERENCE;
    setFieldValue('waterAmount', number.toString());
  };
  const handleReduceWaterAmount = () => {
    const number = Number.parseInt(waterAmount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue('waterAmount', number <= 0 ? '0' : number.toString());
  };

  return (
    <StyledAddWaterModal onSubmit={handleSubmit}>
      <AddWater>Add Water Title</AddWater>
      <TextChoose>Choose a value</TextChoose>
      <TextAmount>Amount of water:</TextAmount>

      <ButtonWrapper>
        <button onClick={handleReduceWaterAmount} name="minus" type="button">
          <StyledMinusIcon aria-label="minus_button" />{' '}
        </button>
        <span className="water-amount-value">
          {waterAmount}
          ml
        </span>
        <button onClick={handleAddWaterAmount} name="plus" type="button">
          <StyledPlusIcon aria-label="plus_button" />{' '}
        </button>
      </ButtonWrapper>

      <FormStyled>
        <label>
          Recording time:
          <input name="date" type="time" value={date} onBlur={handleChange} />
          {errors.date ? <div>{errors.date}</div> : null}
        </label>

        <label>
          Enter the value of the water used:
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
          <p>{waterAmount}ml</p>
          <button disabled={Object.keys(errors).length > 0} type="submit">
            Save
          </button>
        </ButtonSaveWrapper>
      </FormStyled>
    </StyledAddWaterModal>
  );
};

export default TodayListModal;
