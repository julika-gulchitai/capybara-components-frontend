import styled from 'styled-components';

export const IconWrapper = styled.div`
  svg {
    width: 26px;
    height: 26px;
    fill: var(--blue);
    margin-right: 12px;
  }
`;

export const StyledDiv = styled.div`
  min-width: 264px;
  max-height: 258px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 276px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;

export const TodayStyle = styled.h2`
  margin: 0 0 16px 0;
  text-align: left;
  color: var(--black);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const ListAddDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: inherit;
  max-height: 212px;
  @media screen and (min-width: 768px) {
    height: 260px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const UlStyle = styled.ul`
  height: 212px;
  overflow-y: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 5px;
    background: var(--secondary-lightblue);
    border-radius: 50px;
    border: 1px solid var(--secondary-white);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-blue);
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--blue);
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 38px;
  padding: 12px 0 12px 0;
  margin: 0 4px 0 0;
  border-bottom: 1px solid var(--secondary-lightblue);
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & svg {
    width: 26px;
    height: 26px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
    @media only screen and (min-width: 1440px) {
    }
    & use {
      fill: var(--blue);
    }
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const TextVolume = styled.p`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.33;
  margin: 0 12px 0 0;

  @media screen and (min-width: 768px) {
    margin: 0 16px 0 0;
  }
`;

export const TextTime = styled.p`
  color: var(--black);
  font-size: 12px;
  line-height: 2;
`;

export const EditBtn = styled.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  color: var(--secondary-blue);

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--secondary-blue);
    cursor: pointer;
  }
`;

export const DeleteBtn = styled.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  color: var(--secondary-red);

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--secondary-red);
    cursor: pointer;
  }
`;

export const StyledLi = styled.li`
  list-style: none;
`;

export const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: var(--black);
  font-size: 18px;
  font-weight: 500;
  line-height: 133.3%;
`;

export const AddBtnStyle = styled.button`
  display: flex;
  gap: 8px;
  margin-left: 5px;
  color: var(--blue);
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  & svg {
    width: 16px;
    height: 16px;
    & use {
      fill: var(--blue);
    }
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--secondary-orange);
    & use {
      fill: var(--secondary-orange);
    }
  }
`;
