import { styled } from '@mui/system';
import { Switch } from '@mui/material';
import theme from '../../css/VariablesJSX.jsx';

export const LangSwitch = styled(Switch)(() => ({
  padding: 8,
  '& .MuiSwitch-switchBase': {
    color: `${props => props.theme.colors.secondaryBlue}`,
    '&.Mui-checked': {
      color: theme.colors.secondaryBlue,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.colors.secondaryWhite,
        border: '1px solid #dfdfdf',
        opacity: 1,

        '&::before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 30.5 17.74"><polygon fill="${encodeURIComponent('#407bff')}" points="5.16,9.89 11.83,9.89 11.83,7.24 5.16,7.24 5.16,2.69 12.23,2.69 12.23,0.03 1.92,0.03 1.92,17.74 12.62,17.74 12.62,15.08 5.16,15.08"/><path fill="${encodeURIComponent('#407bff')}" d="M26.52,0.03v6.18c0,2.71,0.06,4.99,0.29,7.34l-0.06,0.01c-0.82-1.92-1.85-3.98-3.01-5.94l-4.58-7.6h-3.7v17.71h2.99v-6.34c0-2.91-0.04-5.25-0.17-7.55l0.08-0.02c0.87,2.01,2.05,4.17,3.18,6.11l4.62,7.79h3.35V0.03H26.52z"/></svg>')`,
          left: 12
        },

        '&::after': {
          backgroundImage: `none`,
          right: 12
        }
      }
    }
  },

  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: theme.colors.secondaryWhite,
    border: '1px solid #dfdfdf',
    opacity: 1,

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16
    },
    '&::before': {
      backgroundImage: `none`,
      left: 12
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 33 20"><path fill="${encodeURIComponent('#407bff')}" d="M11.69,11.44c0,3.43-1.38,5-3.68,5c-2.16,0-3.58-1.59-3.58-5V1.26H1.25v9.99C1.25,16.74,3.87,19,7.9,19c4.22,0,6.98-2.39,6.98-7.77V1.26h-3.19V11.44z"/><path fill="${encodeURIComponent('#407bff')}" d="M26.07,1.26h-4.06l-5.6,17.46h3.3l1.49-4.93h5.55l1.58,4.93h3.42L26.07,1.26z M21.72,11.37l1.35-4.31c0.31-1.04,0.58-2.25,0.83-3.27h0.06c0.26,1.01,0.55,2.2,0.89,3.28l1.38,4.3H21.72z"/></svg>')`,
      right: 12
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2
  }
}));

export const ThemeSwitch = styled(Switch)(() => ({
  padding: 8,
  '& .MuiSwitch-switchBase': {
    color: `${props => props.theme.colors.secondaryBlue}`,
    '&.Mui-checked': {
      color: `${props => props.theme.colors.secondaryBlue}`,
      '& + .MuiSwitch-track': {
        backgroundColor: '#2a3052',
        border: '1px solid #dfdfdf',
        opacity: 1
      }
    }
  },

  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: theme.colors.secondaryWhite,
    // backgroundColor: `${props => props.theme.colors.secondaryBg}`,
    border: '1px solid #dfdfdf',
    opacity: 1,

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent('#fff9ad')}" d="M14,2c1.82,0,3.53,0.5,5,1.35C16.01,5.08,14,8.3,14,12s2.01,6.92,5,8.65C17.53,21.5,15.82,22,14,22C8.48,22,4,17.52,4,12 S8.48,2,14,2z"/></svg>')`,
      left: 12
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent('#da9c00')}" d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg>')`,
      right: 12
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2
  }
}));