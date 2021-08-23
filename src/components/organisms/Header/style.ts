import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  height: ${({ theme }) => theme.size.headerHeight};
  background-color: ${({ theme }) => theme.colors.header};
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
  box-shadow: 0 10px 5px 0 rgba(0,0,0,.3);
`;

export const MockButton = styled.button`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: none;
  border: none;
  background-color: transparent;
  color: inherit;
`;