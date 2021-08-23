import styled from 'styled-components';
import { IoSearch } from 'react-icons/all';

export const SearchIcon = styled(IoSearch)`
  &:hover { cursor: pointer }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.header};
  border-radius: 5px;
  padding: 15px 20px;
  width: 350px;
  border: 1px solid transparent;
  &:focus-within {
    border-color: rgba(0,0,0,.4);
  }
  &:hover {
    cursor: text;
  }
`;

export const InputSearch = styled.input`
  border: none;
  outline: none;
  color: inherit;
  background-color: transparent;
  
  &::placeholder {
    color: inherit;
  }
`;