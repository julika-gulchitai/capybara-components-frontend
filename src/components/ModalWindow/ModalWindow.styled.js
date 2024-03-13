import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  `;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 32px 24px;
  max-width: 1008px;
  background-color: #fff;
  @media (max-width: 767px) {
    max-width: 704px;
  }
  @media (max-width:320px) {
    padding: 24px 12px;
    max-width: 280px;
  }
`;

export const ModalButtonClose = styled.button`
  background: #fcfcfc;
  border:none;
  position: absolute;
  color: #407bff;
  padding: 0;
  right: 24px;
  top: 36px;
  `;

export const StyledIconWrapper = styled.svg`
width: ${(props) => props.size || '24px'};
height: ${(props) => props.size || '24px'};
display: inline - block;
padding:0;
`;
