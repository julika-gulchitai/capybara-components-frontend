// Images for Light Theme
import lightBgWelcomePageDsctp from '../assets/desktop/light-bg-welcome-page.svg'
import lightBgWelcomePageDeskBottle from '../assets/desktop/bg-welcome-desk-bottle.svg'
import lightBgWelcomePageTab from '../assets/tablet/light-bg-welcome-page.svg'
import lightBgWelcomePageMob from '../assets/mobile/light-bg-welcome-page.svg'

import lightBgHomeDesktop from '../assets/desktop/bg-home-desktop.svg'
import lightBgHomeTab from '../assets/tablet/bg-home-tablet.svg'
import lightBgHomeMob from '../assets/mobile/bg-home-mob.svg'

import lightBgSignDesktop from '../assets/desktop/bg-sign-light-desk.svg'
import lightBgSignTab from '../assets/tablet/bg-sign-light-tab.svg'
import lightBgSignMob from '../assets/mobile/bg-sign-light-mob.svg'

// Images for Dark Theme
import darkBgWelcomePageDsctp from '../assets/desktop/darkTheme/background-welcome-page.svg'
import darkBgWelcomePageDeskBottle from '../assets/desktop/darkTheme/bg-welcome-desk-bottle.svg'
import darkBgWelcomePageTab from '../assets/tablet/darkTheme/background-welcome-page.svg'
import darkBgWelcomePageMob from '../assets/mobile/darkTheme/background-welcome-page.svg'

import darkBgHomeDesktop from '../assets/desktop/darkTheme/bg-home-dark-desktop.svg'
import darkBgHomeTab from '../assets/tablet/darkTheme/bg-home-dark-tablet.svg'
import darkBgHomeMob from '../assets/mobile/darkTheme/bg-home-dark-mob.svg'

import darkBgSignDesktop from '../assets/desktop/darkTheme/bg-sign-dark-desk.svg'
import darkBgSignTab from '../assets/tablet/darkTheme/bg-sign-dark-tab.svg'
import darkBgSignMob from '../assets/mobile/darkTheme/bg-sign-dark-mob.svg'

export const themeLight = Object.freeze({
  colors: {
    mainBg: '#ffffff',
    textColor: '#2F2F2F',
    primaryBlue: '#407BFF',
    secondaryBg: '#ECF2FF',
    secondaryLightblue: '#D7E3FF',
    secondaryBlue: '#9EBBFF',
    secondaryRed: '#EF5050',
    secondaryOrange: '#FF9D43',
    secondaryBlueMedium: '#c6d7ff',
    secondaryGrayMedium: '#f5f5f5',

    switchBg: '#ECF2FF',
    switchButton: '#9EBBFF',
    switchBorder: '#dfdfdf',

    secondaryGray: '#8F8F8F',

    fontSizes: {
      tiny: '12px',
      small: '16px',
      medium: '18px',
      large: '26px',
      XL: '28px',
    },

    animation: {
      duration: '0.3s',
      cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
    },
  },
  shadows: {
    buttonShadow: '0 4px 8px 0 rgba(64, 123, 255, 0.34)',
    secondaryButtonShadow: '0px 2px 4px 0px rgba(64, 123, 255, 0.2)',
    calendarShadow: '0px 2px 4px 0px rgba(64, 123, 255, 0.3)',
    windowShadowContainer: '0 4px 14px 0 rgba(64, 123, 255, 0.3)',
    secondaryShadowContainer: '0 4px 8px 0 rgba(158, 187, 255, 0.12)',
  },

  hovers: {
    buttonShadow: '0 4px 14px 0 rgba(64, 123, 255, 0.54)',
  },

  backgroundImage: {
    backgroundWelcomePageDsctp: lightBgWelcomePageDsctp,
    backgroundWelcomePageDeskBottle: lightBgWelcomePageDeskBottle,
    backgroundWelcomePageTablet: lightBgWelcomePageTab,
    backgroundWelcomePageMob: lightBgWelcomePageMob,
    bgHomeDesktop: lightBgHomeDesktop,
    bgHomeTab: lightBgHomeTab,
    bgHomeMob: lightBgHomeMob,
    bgSignDesktop: lightBgSignDesktop,
    bgSignTab: lightBgSignTab,
    bgSignMob: lightBgSignMob,
  },


});
export const themeDark = Object.freeze({
  colors: {
    mainBg: '#1c1d26',
    textColor: '#d5dff5',
    primaryBlue: '#5082f2',

    secondaryBg: '#1f2438',
    secondaryLightblue: '#2a3052',
    secondaryBlue: '#2f3875',
    secondaryRed: '#f16161',
    secondaryOrange: '#ffa756',
    // secondaryBlueMedium: '#c6d7ff',
    // secondaryGrayMedium: '#f5f5f5',

    secondaryGray: '#8F8F8F',

    switchBg: '#2a3052',
    switchButton: '#9EBBFF',
    switchBorder: '#dfdfdf',

    // buttonClose: '#407bff',

    // fontSizes: {
    //   tiny: '12px',
    //   small: '16px',
    //   medium: '18px',
    //   large: '26px',
    //   XL: '28px',
    // },

    // animation: {
    //   duration: '0.3s',
    //   cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
    // },
  },
  shadows: {
    buttonShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.34)',
    secondaryButtonShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    calendarShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
    windowShadowContainer: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
    secondaryShadowContainer: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',

  },

  hovers: {
    buttonShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.54)',
  },

  backgroundImage: {
    backgroundWelcomePageDsctp: darkBgWelcomePageDsctp,
    backgroundWelcomePageDeskBottle: darkBgWelcomePageDeskBottle,
    backgroundWelcomePageTablet: darkBgWelcomePageTab,
    backgroundWelcomePageMob: darkBgWelcomePageMob,
    bgHomeDesktop: darkBgHomeDesktop,
    bgHomeTab: darkBgHomeTab,
    bgHomeMob: darkBgHomeMob,
    bgSignDesktop: darkBgSignDesktop,
    bgSignTab: darkBgSignTab,
    bgSignMob: darkBgSignMob,
  },
});

