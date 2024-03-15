import { useState } from 'react';
import Notiflix from 'notiflix';
import { paramsForNotify } from '../../redux/notifications';

import {
  AddWater,
  TextChoose,
  TextAmount,
  ButtonWrapper,
  FormStyled,
  ButtonSaveWrapper,
  StyledAddWaterModal,
  GlassContainer,
  FormAmount,
  TimeValue,
} from './TodayListModal.styled';

const TodayListModal = ({ isEditing, data, onClose }) => {
  const [amountWater, setAmountWater] = useState(
    isEditing ? data.amountWater : 0
  );
  const [recordedTime, setRecordedTime] = useState(
    isEditing ? new Date(data.time) : new Date()
  );

  const handleAmountChange = (evt) => {
    const { name } = evt.currentTarget;

    switch (name) {
      case 'minus':
        setAmountWater((state) => Math.max(state - 50, 0));
        break;
      case 'plus':
        setAmountWater((state) => Math.min(state + 50, 5000));
        break;
      case 'input':
        break;
      default:
    }
  };

  const handleTimeChange = (evt) => {
    const timeString = evt.target.value;
    const [hours, minutes] = timeString.split(':').map(Number);

    const newRecordedTime = new Date(recordedTime);
    newRecordedTime.setHours(hours);
    newRecordedTime.setMinutes(minutes);

    setRecordedTime(newRecordedTime);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    if (amountWater === 0) {
      Notiflix.Notify.warning(
        'A non-zero value must be entered for the amount of water',
        paramsForNotify
      );
      return;
    }

    if (amountWater < 0 || amountWater === '') {
      Notiflix.Notify.warning(
        'It is necessary to enter a positive value for the amount of water',
        paramsForNotify
      );
      return;
    }

    onClose();
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  return (
    <StyledAddWaterModal>
      <AddWater>{title}</AddWater>
      <div>
        {isEditing && (
          <GlassContainer>
            <FormAmount>{data.amountWater}ml</FormAmount>
            <TimeValue>
              {new Date(data.time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </TimeValue>
          </GlassContainer>
        )}
      </div>

      <TextChoose>
        {isEditing ? 'Correct entered data:' : 'Choose a value:'}
      </TextChoose>

      <TextAmount>Amount of water:</TextAmount>

      <ButtonWrapper>
        <button
          type="button"
          name="minus"
          onClick={handleAmountChange}
          disabled={amountWater === 0}
        ></button>

        <span>{amountWater}ml</span>

        <button type="button" name="plus" onClick={handleAmountChange}></button>
      </ButtonWrapper>

      <FormStyled>
        <label>
          Recording time:
          <input
            type="time"
            value={recordedTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
            onChange={handleTimeChange}
          />
        </label>

        <label>
          Enter the value of the water used:
          <input
            name="input"
            type="number"
            value={amountWater}
            onChange={(evt) => handleAmountChange(evt)}
            min="1"
            max="5000"
          />
        </label>

        <ButtonSaveWrapper>
          <p>{amountWater}ml</p>
          <button onClick={handleSave}>Save</button>
        </ButtonSaveWrapper>
      </FormStyled>
    </StyledAddWaterModal>
  );
};

export default TodayListModal;
