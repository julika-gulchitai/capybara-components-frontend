import { StyledWatterAddBtn } from './WatterAddButton.styled';
import { ReactComponent as IconPlus } from '../../../assets/icon/plus-small.svg';

const WaterAddButton = () => {
  return (
    <StyledWatterAddBtn>
      <IconPlus />
      Add Water
    </StyledWatterAddBtn>
  );
};

export default WaterAddButton;
