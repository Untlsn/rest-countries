import styled from 'styled-components';

export const Wrapper = styled.main`
  margin: calc(${({ theme }) => theme.size.headerHeight} + 5vh) 5vw 0;
  width: 90vw;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10vh;
`;