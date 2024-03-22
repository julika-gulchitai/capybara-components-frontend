import { StyledWatterAddBtn } from './WatterAddButton.styled';
import { ReactComponent as IconPlus } from '../../../assets/icon/plus-small.svg';
import '../../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

const WaterAddButton = () => {
  const { t } = useTranslation();
  return (
    <StyledWatterAddBtn>
      <IconPlus />
      {t('addWater')}
    </StyledWatterAddBtn>
  );
};

export default WaterAddButton;
