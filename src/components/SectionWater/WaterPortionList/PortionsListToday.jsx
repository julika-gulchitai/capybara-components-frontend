import { useSelector } from 'react-redux';
import WaterAddButton from '../WatterAddButton/WatterAddButton';
import { selectNotes } from '../../../redux/Water/selectors';
import { getLocaleTime } from '../../../services/getLocaleTime';

import {
  Edit,
  PortionsList,
  Portions,
  Volumes,
  Portion,
  Time,
} from './PortionsListToday.styled';

import { ReactComponent as Icon } from '../../../assets/icon/glass.svg';
import { useTranslation } from 'react-i18next';

const PortionsListToday = () => {
  const { t } = useTranslation();
  const waterPortions = useSelector(selectNotes);

  return (
    <PortionsList>
      {waterPortions.length === 0 ? (
        <p className="motivation">{t('portionsText')}</p>
      ) : (
        <>
          <Portions>
            {waterPortions?.map((item) => (
              <Portion key={item._id}>
                <Icon className="glass" />
                <Volumes>{`${item.waterAmount} ${t('ml')}`} </Volumes>
                <Time>{getLocaleTime(item.date)}</Time>
                <Edit></Edit>
              </Portion>
            ))}
          </Portions>
          <WaterAddButton />
        </>
      )}
    </PortionsList>
  );
};
export default PortionsListToday;
