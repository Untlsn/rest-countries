import React from 'react';
import * as S from './style';
import { InformationPointProps } from '~/components/atoms/InformationPoint/types';


const InformationPoint = ({ name, data, loCase }: InformationPointProps) => {
  return (
    <S.Wrapper>
      <b>{name}:</b>
      <S.Case $case={loCase ? 'lowercase' : 'capitalize'}>
        {data}
      </S.Case>
    </S.Wrapper>
  );
};

export default InformationPoint;