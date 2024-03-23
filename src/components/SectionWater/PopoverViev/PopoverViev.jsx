import { useState } from 'react';
import {
  Cross,
  StyledBtn,
  StyleWrapperDay,
  Percentage,
} from './PopoverViev.styled';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Typography';
import DayStatistics from '../DayStatistics/DayStatistics';
import { ReactComponent as Xmark } from '../../../assets/icon/outline-desc.svg';

const PopoverViev = ({ item, index, monthName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { waterVolumePercentage } = item;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const displayedPercentage = Math.min(100, waterVolumePercentage); // Обмежуємо відсотки до 100%

  return (
    <StyleWrapperDay>
      <StyledBtn
        aria-describedby={id}
        onClick={handleClick}
        style={{
          border: displayedPercentage >= 100 ? 'none' : '1px solid',
          borderColor: displayedPercentage >= 100 ? 'transparent' : '#ff9d43',
        }}
      >
        {index + 1}
      </StyledBtn>
      <Percentage>{displayedPercentage}%</Percentage>{' '}
      {/* Використовуємо обмежене значення відсотків */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{ p: 2 }}
          style={{
            minWidth: '292px',
            minHeight: '188px',
            padding: '24px 16px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px rgba(64, 123, 255, 0.3)',
          }}
        >
          <Cross onClick={handleClose}>
            <Xmark />
          </Cross>
          <DayStatistics item={item} index={index} monthName={monthName} />
        </Box>
      </Popover>
    </StyleWrapperDay>
  );
};

export default PopoverViev;
