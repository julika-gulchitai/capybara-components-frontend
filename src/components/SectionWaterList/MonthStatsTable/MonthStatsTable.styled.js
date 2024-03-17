import styled from 'styled-components';

export const StyledMonthStatsTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -180px;
`;
export const MonthNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const MonthTitle = styled.h2`
  color: var(--black);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const Button = styled.button`
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  .nav {
    width: 14px;
    height: 14px;
    fill: var(--blue);
  }

  &:disabled {
    fill: var(--secondary-blue);
    cursor: not-allowed;
  }
`;

export const DaysSection = styled.div`
  position: relative;
  width: 100%;
  column-gap: 26px;
  row-gap: 16px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    column-gap: 34px;
    row-gap: 20px;
    column-gap: 34px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }
`;

export const DayOne = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Popup = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 0;
  transform: translate(0, -100%);
  transition: all 0.2s ease-in-out;
  width: 280px;
  height: 188px;

  background-color: var(--white);
  border-radius: 10px;
  padding: 24px 13px;
  z-index: 2;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  @media screen and (max-width: 768px) {
    position: fixed;
    left: ${(props) => props.x - 140}px;
    top: ${(props) => props.y - 35}px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 16px;
    width: 292px;
  }

  @media screen and (min-width: 1440px) {
  }

  h3 {
    color: var(--blue);
    font-size: 16px;
    line-height: 1.25;
    margin: 0;
  }
  span {
    color: var(--blue);
    font-weight: 500;
    line-height: 1.33;
    font-size: 18px;
  }
  p {
    color: var(--black);
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledMonthWrapper = styled.div`
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
`;
export const Month = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const Day = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isToday ? `rgba(215, 227, 255, 1)` : `var( --white)`};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${(props) =>
    props.$isOutlineVisible ? `1px solid var(--secondary-orange)` : 'none'};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  &:hover ${Popup} {
    display: flex;
  }

  @media (min-width: 768px) {
    &:hover ${Popup}.right {
      left: auto;
      right: 100%;
      top: -10%;
    }

    &:hover ${Popup}.left {
      left: 100%;
      right: auto;
      top: -10%;
    }
  }
  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`;

export const DaySumPer = styled.span`
  color: var(--secondary-blue);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: 1.6;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 1.54;
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;
