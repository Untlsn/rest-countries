import styled from 'styled-components';

export const Wrapper = styled.p`
  text-transform: capitalize;
`;

export const Case = styled.span<{ $case: string }>`
  padding-left: 7px;
  text-transform: ${({ $case }) => $case};
`;