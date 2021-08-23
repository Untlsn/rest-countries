import styled from 'styled-components';

export const Wrapper = styled.a`
  background-color: ${({ theme }) => theme.colors.header};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover { cursor: pointer }
`;

export const Img = styled.img`
  width: 100%;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.2);
`;

export const Description = styled.div`
  padding-left: 30px;
  text-transform: capitalize;
`;