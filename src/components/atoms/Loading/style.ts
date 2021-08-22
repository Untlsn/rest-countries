import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.main};
`;

const rotate = keyframes`
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
`;

export const LoadingCircle = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 100%;
  border: 5px solid rgba(0,0,0,.2);
  border-bottom-color: rgba(0,0,0,.7);
  
  animation: ${rotate} 2s infinite linear;
`;
