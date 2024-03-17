import * as React from 'react';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  Button,
  Day,
  DayOne,
  DaySumPer,
  DaysSection,
  Month,
  MonthTitle,
  MonthNav,
  Popup,
  StyledMonthWrapper,
  StyledMonthStatsTable,
} from './MonthStatsTable.styled';

const MonthStatsTable = () => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [hoveredDayCoords, setHoveredDayCoords] = useState({ x: 0, y: 0 });
  const daysContainerRef = React.useRef(null);

  const updateXCoord = () => {
    if (daysContainerRef.current) {
      const rect = daysContainerRef.current.getBoundingClientRect();
      setHoveredDayCoords((coords) => ({
        ...coords,
        x: rect.left + rect.width / 2,
      }));
    }
  };

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
  const monthName = date.toLocaleString('en-US', { month: 'long' });

  const isCurrentMonth = () => {
    return (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  function findWaterRecordByDate() {
    // логіка для знаходження запису про воду за датою
  }

  return (
    <StyledMonthStatsTable>
      <MonthNav>
        <MonthTitle>Month</MonthTitle>
        <StyledMonthWrapper>
          <Button
            onClick={() => {
              const newDate = new Date(year, month - 1, day);
              setYear(newDate.getFullYear());
              setMonth(newDate.getMonth());
              setDay(newDate.getDate());
              setDate(newDate);
            }}
          >
            <IoIosArrowBack className="nav" />
          </Button>
          <Month>{`${MONTHS[month]}, ${year}`}</Month>
          <Button
            onClick={() => setDate(new Date(year, month + 1, day))}
            disabled={isCurrentMonth()}
          >
            <IoIosArrowForward className="nav" />
          </Button>
        </StyledMonthWrapper>
      </MonthNav>
      <DaysSection ref={daysContainerRef}>
        {days[month]
          ? Array(days[month])
              .fill(null)
              .map((_, index) => {
                const dayOfMonth = index + 1;
                const isToday =
                  dayOfMonth === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();
                const isSelected = dayOfMonth === day;
                const defDate = `${monthName}, ${dayOfMonth}`;
                let record = findWaterRecordByDate(defDate);
                const isLeft =
                  dayOfMonth <= 5 ||
                  (dayOfMonth >= 11 && dayOfMonth <= 15) ||
                  (dayOfMonth >= 21 && dayOfMonth <= 25) ||
                  dayOfMonth === 31;
                if (!record) {
                  record = {
                    percentage: 0,
                    recordsWaterConsumption: 0,
                  };
                }
                const isOutlineVisible =
                  record.percentage > 0 && record.percentage < 100;
                return (
                  <DayOne key={`${dayOfMonth}-${month + 1}`}>
                    <Day
                      $isToday={isToday}
                      $isSelected={isSelected}
                      $isOutlineVisible={isOutlineVisible}
                      onMouseEnter={(event) => {
                        const rect = event.target.getBoundingClientRect();
                        setHoveredDayCoords({
                          x: hoveredDayCoords.x,
                          y: rect.bottom,
                        });
                      }}
                      onClick={() => {
                        setDay(dayOfMonth);
                      }}
                    >
                      {dayOfMonth}
                      <Popup
                        x={hoveredDayCoords.x}
                        y={hoveredDayCoords.y}
                        className={isLeft ? 'left' : 'right'}
                      >
                        <>
                          <h3>
                            {dayOfMonth}, {monthName}{' '}
                          </h3>
                          <p>
                            Daily norma: <span>{record.dailyNorma}</span>
                          </p>
                          <p>
                            Fulfillment of the daily norm:{' '}
                            <span>{record.percentage}%</span>
                          </p>
                          <p>
                            How many servings of water:{' '}
                            <span>{record.recordsWaterConsumption}</span>
                          </p>
                        </>
                      </Popup>
                    </Day>
                    <DaySumPer>{record.percentage}%</DaySumPer>
                  </DayOne>
                );
              })
          : null}
      </DaysSection>
    </StyledMonthStatsTable>
  );
};

export default MonthStatsTable;
