import styled from "styled-components";

export const TodayBox = styled.div`
  margin-bottom: 24px;
`;

export const TodayStile = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const EmptyNotes = styled.p`
font-size: 18px;
 color: ${(props) => props.theme.colors.secondaryBlue};
 margin-bottom: 16px;
`
