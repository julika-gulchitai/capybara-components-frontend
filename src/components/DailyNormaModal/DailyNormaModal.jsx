import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  DailyNorma,
  DailyNormaContainer,
  Explanation,
  Formula,
  InputWrapper,
  RadioBtns,
  RequiredNorma,
  WeightAndSports,
} from './DailyNormaModal.styled';
// import ModalWindow from '../ModalWindow/ModalWindow';

const DailyNormaModal = ({ onClose }) => {
  const [weight, setWeight] = useState(0);
  const [sports, setSports] = useState(0);
  const [dailyNorma, setDailyNorma] = useState(1.8);
  const [isFemale, setIsFemale] = useState(true);

  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      weight: 0,
      sports: 0,
      norma: dailyNorma,
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
  }, [weight, sports, dailyNorma, isFemale]);

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
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <RadioBtns>
          <label htmlFor="gender-choice-female">
            <input
              type="radio"
              id="gender-choice-female"
              {...register('gender')}
              name="gender"
              value="female"
              defaultChecked
              onInput={() => setIsFemale(true)}
            />
            For woman
          </label>
          <label htmlFor="gender-choice-male">
            <input
              type="radio"
              id="gender-choice-male"
              {...register('gender')}
              name="gender"
              value="male"
              onInput={() => setIsFemale(false)}
            />
            For man
          </label>
        </RadioBtns>
        <WeightAndSports>
          <InputWrapper>
            <label htmlFor="weight">Your weight in kilograms:</label>
            <input
              type="text"
              {...register('weight')}
              name="weight"
              id="weight"
              placeholder="0"
              onChange={(e) => setWeight(e.target.value)}
            />
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
          />
        </DailyNorma>
        <button type="submit" onClick={onClose}>
          Save
        </button>
      </form>
    </DailyNormaContainer>
  );
};

export default DailyNormaModal;
