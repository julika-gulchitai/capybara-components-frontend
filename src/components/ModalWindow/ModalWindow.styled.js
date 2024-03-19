import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  @media only screen and (min-width: 1440px) {
    align-items: center;
      }
  `;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 24px 12px;
  margin: 40px 20px;
  background-color: ${props => props.theme.colors.white};
  overflow: auto;
  @media only screen and (min-width: 768px) {
     padding: 32px 24px;
     margin: 40px 32px;
  }
`;

export const ModalButtonClose = styled.button`
  background: #fcfcfc;
  border:none;
  position: absolute;
  color: #407bff;
  padding: 0;
  right: 12px;
  top: 24px;
  @media only screen and (min-width: 768px) {
    right: 24px;
    top: 32px;
  }
  @media only screen and (min-width: 1440px) {
       top: 36px;
  }
  `;

export const StyledIconWrapper = styled.svg`
width: ${(props) => props.size || '24px'};
height: ${(props) => props.size || '24px'};
display: inline-block;
padding:0;
`;