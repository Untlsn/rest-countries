import styled from 'styled-components';

export const Wrapper = styled.details`
  &:focus-within ul {
    visibility: visible;
  }
  text-transform: capitalize;
  user-select: none;
`;

export const BoxTemplate = styled.summary`
  padding: 15px 30px;
  border-radius: 5px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0 0 5px 0 rgba(0,0,0, .3);
  font-size: 12px;
`;

export const Selected = styled(BoxTemplate)`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  &:hover { cursor: pointer }
`;

export const Options = styled(BoxTemplate).attrs({ as: 'ul' })`
  margin-top: 5px;
  visibility: hidden;
  position: absolute;
  
  li {
    &:hover { cursor: pointer }
  }
`;