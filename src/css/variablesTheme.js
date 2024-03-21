import lightBgWelcomePageDsctp from '../assets/desktop/light-bg-welcome-page.svg'
import lightBgWelcomePageTab from '../assets/tablet/light-bg-welcome-page.svg'
import lightBgWelcomePageMob from '../assets/mobile/light-bg-welcome-page.svg'
import lightBgElMainPageDsctp from '../assets/desktop/background-element-main-page.svg'
import lightBgElMainPageTab from '../assets/tablet/background-element-home-screen.svg'
import lightBgElMainPageMob from '../assets/mobile/background-element-home-screen.svg'
import lightBottleHscDesc from '../assets/desktop/botle-home-screen.svg'
import lightBottleHscTab from '../assets/tablet/bottle-home-screen.svg'
import lightBottleHscMob from '../assets/mobile/bottle-home-screen.svg'

import darkBgWelcomePageDsctp from '../assets/desktop/darkTheme/background-welcome-page.svg'
import darkBgWelcomePageTab from '../assets/tablet/darkTheme/background-welcome-page.svg'
import darkBgWelcomePageMob from '../assets/mobile/darkTheme/background-welcome-page.svg'
import darkBgElMainPageDsctp from '../assets/desktop/darkTheme/dark-bg-el-home-screen-desk.svg'
import darkBgElMainPageTab from '../assets/tablet/darkTheme/dark-bg-el-home-screen-tab.svg'
import darkBgElMainPageMob from '../assets/mobile/darkTheme/dark-bg-el-home-screen-mob.svg'
import darktBottleHscDesc from '../assets/desktop/darkTheme/bottle-home-screen-dark-desc.svg'
import darktBottleHscTab from '../assets/tablet/darkTheme/bottle-home-screen-dark-tab.svg'
import darktBottleHscMob from '../assets/mobile/darkTheme/bottle-home-screen-dark-mob.svg'

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

    secondaryGray: '#8F8F8F',

    buttonClose: '#407bff',

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
    windowShadowContainer: '0 4px 14px 0 rgba(64, 123, 255, 0.3)',
  },

  hovers: {
    buttonShadow: '0 4px 14px 0 rgba(64, 123, 255, 0.54)',
  },

  backgroundImage: {
    backgroundWelcomePageDsctp: lightBgWelcomePageDsctp,
    backgroundWelcomePageTablet: lightBgWelcomePageTab,
    backgroundWelcomePageMob: lightBgWelcomePageMob,
    bgElemMainPageDsctp: lightBgElMainPageDsctp,
    bgElemMainPageTab: lightBgElMainPageTab,
    bgElemMainPageMob: lightBgElMainPageMob,
    bgtBottleHscDesc: lightBottleHscDesc,
    bgtBottleHscTab: lightBottleHscTab,
    bgtBottleHscMob: lightBottleHscMob,
  },


});
export const themeDark = Object.freeze({
  colors: {
    mainBg: '#1c1d26',
    textColor: '#d5dff5',
    primaryBlue: '#5082f2',

    secondaryBg: '#1f2438',
    // secondaryLightblue: '#D7E3FF',
    secondaryBlue: '#2f3875',
    secondaryRed: '#f16161',
    secondaryOrange: '#ffa756',
    // secondaryBlueMedium: '#c6d7ff',
    // secondaryGrayMedium: '#f5f5f5',

    // secondaryGray: '#8F8F8F',

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
    windowShadowContainer: '0 4px 14px 0 rgba(0, 0, 0, 0.2)'
  },

  hovers: {
    buttonShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.54)',
  },

  backgroundImage: {
    backgroundWelcomePageDsctp: darkBgWelcomePageDsctp,
    backgroundWelcomePageTablet: darkBgWelcomePageTab,
    backgroundWelcomePageMob: darkBgWelcomePageMob,
    bgElemMainPageDsctp: darkBgElMainPageDsctp,
    bgElemMainPageTab: darkBgElMainPageTab,
    bgElemMainPageMob: darkBgElMainPageMob,
    bgtBottleHscDesc: darktBottleHscDesc,
    bgtBottleHscTab: darktBottleHscTab,
    bgtBottleHscMob: darktBottleHscMob,
  },
});
