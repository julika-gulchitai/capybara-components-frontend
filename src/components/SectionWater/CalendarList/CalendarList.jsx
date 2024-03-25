import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { format } from 'date-fns';
import ukLocale from 'date-fns/locale/uk';
import enLocale from 'date-fns/locale/en-US';
import { useTranslation } from 'react-i18next';

import { apiGetMonthWaterPortions } from '../../../redux/Water/WaterThunks';
import { selectStats } from '../../../redux/Water/selectors';

import {
  getNameOfMonth,
  getDaysInMonth,
  getNumberDay,
  createMonthArray,
} from '../../../services/timeServices';

import PopoverViev from '../PopoverViev/PopoverViev';
import svgSprite from '../../../assets/sprite.svg';

import {
  HeaderList,
  Title,
  WrapperGroup,
  TableDays,
  ButtonArrow,
} from './CalendarList.styled';
import {setSelectedCalendar} from '../../../redux/Water/WaterSlices.js';

const currentDate = new Date();

const CalendarList = () => {
  const stats = useSelector(selectStats);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const monthName = getNameOfMonth(month);
  const numberOfdays = getDaysInMonth(month, year);
  const monthArray = createMonthArray(numberOfdays, monthName);

  const monthStats = monthArray?.map((item) => {
    const statsItem = Object.values(stats).find(
      (i) => getNumberDay(i.date) === getNumberDay(item.date)
    );
    return statsItem || item;
  });

  useEffect(() => {
    dispatch(apiGetMonthWaterPortions({ year, month: month + 1 }));
    dispatch(setSelectedCalendar({year, month }))
  }, [dispatch, year, month]);

  const previousMonth = ({currentTarget}) => {
    if (month === 0) {
      setYear((prevYear) => prevYear - 1);
      setMonth(11);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
    currentTarget.blur()
  };

  const nextMonth = ({currentTarget}) => {
    if (month === 11) {
      setYear((prevYear) => prevYear + 1);
      setMonth(0);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
    currentTarget.blur()
  };

  return (
    <>
      <HeaderList>
        <Title>{i18n.t('month')}</Title>
        <WrapperGroup>
          <ButtonArrow onClick={previousMonth}>
            <svg>
              <use href={`${svgSprite}#icon-arrow-left`} />
            </svg>
          </ButtonArrow>
          <span style={{ textTransform: 'capitalize' }}>
            {format(new Date(year, month, 1), 'LLLL', {
              locale: i18n.language === 'uk' ? ukLocale : enLocale,
            })}
            , {year}
          </span>
          <ButtonArrow
            onClick={nextMonth}
            disabled={currentDate < new Date(year, month + 1)}
          >
            <svg>
              <use href={`${svgSprite}#icon-arrow-right`} />
            </svg>
          </ButtonArrow>
        </WrapperGroup>
      </HeaderList>
      <TableDays>
        {monthStats.map((item, index) => {
          const localizedMonthName = format(
            new Date(year, month, index + 1),
            'LLLL',
            {
              locale: i18n.language === 'uk' ? ukLocale : enLocale,
            }
          );
          return (
            <PopoverViev
              key={index}
              item={item}
              index={index}
              monthName={localizedMonthName}
            />
          );
        })}
      </TableDays>
    </>
  );
};
export default CalendarList;
