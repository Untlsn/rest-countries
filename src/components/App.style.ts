import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  p { margin: 0 }
`;

export const rotate = keyframes`
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
`;

export const Image = styled.img.attrs({ alt: '' })`
  height: 50rem;
  animation: ${rotate} 7s infinite linear;
  user-select: none;
`;