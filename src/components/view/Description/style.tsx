import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import React from 'react';

export const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.main};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;


export const Flag = styled.img.attrs({ alt: 'flag' })`
  height: 40vh;
  background-color: rgba(0,0,0,.1);
  box-shadow: 0 0 3px 0 rgba(0,0,0,.2);
`;

export const RelDiv = styled.div`
  position: relative;
`;

export const BackButton = styled.button.attrs({
  children: <a href="/"><BsArrowLeft size={20} /> back</a>,
})`
  position: absolute;
  top: -10vh;
  left: 0;

  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0,0,0, .3);
  background-color: ${({ theme }) => theme.colors.header};
  
  a {
    text-transform: capitalize;
    font-size: 12px;
    height: 25px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;