import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Popper from '@mui/material/Popper';
import Box from '@mui/material/Typography';

import { selectTheme } from '../../../redux/global/selectors';

import DayStatistics from '../DayStatistics/DayStatistics';

import { themeDark, themeLight } from '../../../css/variablesTheme';
import { StyledBtn, StyleWrapperDay, Percentage } from './PopoverViev.styled';

const PopoverViev = ({ item, index, monthName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { waterVolumePercentage } = item;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const displayedPercentage = Math.min(100, waterVolumePercentage);

  // Determine if Popper is positioned to the left or right of the anchor element
  const isLeft =
    anchorEl && anchorEl.getBoundingClientRect().left > window.innerWidth / 2;

  const currentTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(themeLight);
  useEffect(() => {
    currentTheme === 'dark' ? setTheme(themeDark) : setTheme(themeLight);
  }, [currentTheme, theme]);

  return (
    <StyleWrapperDay>
      <StyledBtn
        aria-describedby={id}
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
        style={{
          border: displayedPercentage >= 100 ? 'none' : '1px solid',
          borderColor:
            displayedPercentage >= 100
              ? 'transparent'
              : theme.colors.secondaryOrange,
        }}
      >
        {index + 1}
      </StyledBtn>
      <Percentage>{displayedPercentage}%</Percentage>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement={isLeft ? 'right-start' : 'left-start'}
        modifiers={[
          {
            name: 'preventOverflow',
            options: {
              altAxis: true,
              tether: true,
              padding: 8,
            },
          },
          {
            name: 'flip',
            enabled: true,
            options: {
              fallbackPlacements: ['top'],
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Box
            component="div"
            sx={{
              p: 2,
              minWidth: '292px',
              minHeight: '188px',
              padding: '24px 16px',
              borderRadius: '10px',
              background: theme.colors.mainBg,
              boxShadow: theme.shadows.calendarShadow,
            }}
            onMouseLeave={handleClick}
            {...TransitionProps}
          >
            <DayStatistics item={item} index={index} monthName={monthName} />
          </Box>
        )}
      </Popper>
    </StyleWrapperDay>
  );
};

export default PopoverViev;
