import moment from 'moment';

export const createMonthArray = (number, name) =>
  Array.from({ length: number }, (_, index) => ({
    date: `${index + 1}, ${name}`,
    portions: 0,
    waterVolumePercentage: 0,
    dailyNorma: 0,
  }));

export const getDaysInMonth = (monthNum, yearNum) => {
  return new Date(yearNum, monthNum + 1, 0).getDate();
};

export const localeFormat = navigator.language;
export const getLocaleTime = (date, locale = 'HH:mm') =>
  moment.utc(date).locale(localeFormat).format(locale);

export const getNameOfMonth = (month) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[month];
};

export const getNumberDay = (dateString) => {
  const parts = dateString?.split(', ');
  return parseInt(parts?.[0] ?? 0);
};
