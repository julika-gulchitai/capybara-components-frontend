import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  z-index: 100;
  @media (max-width: 767px) {
    backdrop-filter: none;
    align-items: flex-start;
    margin-top: 72px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: inherit;
  overflow: hidden;
  max-width: 1000px;
  border-radius: 8px;
  width: 533px;
  min-height: 100px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 767px) {
    height: calc(100vh - 72px);
    justify-content: center;
    background-size: cover;
  }

  p {
    color: #fff;
    font-family: 'Poppins Regular';
    font-size: 18px;
    line-height: normal;
    margin: 52px auto;
    @media (max-width: 767px) {
      margin-top: 20px;
    }
  }
`;

export const ModalButtonClose = styled.button`
  background: #fcfcfc;
  margin-bottom: 60px;
  margin-top: 20px;
  border:none;
  position: absolute;
  color: #407bff;
  right: 10px;
  top: 5px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
