import styled from 'styled-components';

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const WrapperGroup = styled.div`
  display: flex;
  gap: 12px;

  span {
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 16px;
    line-height: 1.25;
    width: 120px;
    text-align: center;
  }
`;

export const TableDays = styled.ul`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;

  width: 264px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    row-gap: 20px;
    column-gap: 34px;

    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 20px;
    column-gap: 22px;
    width: 544px;
    height: 284px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const ButtonArrow = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  svg {
    width: 5px;
    height: 10px;
  }
`;
