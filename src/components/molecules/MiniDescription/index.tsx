import React from 'react';
import * as S from './style';
import { MiniDescriptionProps } from '~/components/molecules/MiniDescription/types';
import numberPrettier from '~/helpers/numberPrettier';

const MiniDescription = ({ flag, name, population, region, capital }: MiniDescriptionProps) => {
  const rest = { region, capital, population: numberPrettier(population) };
  return (
    <S.Wrapper href={`/country/${name}`}>
      <S.Img src={flag} alt={name} />
      <S.Description>
        <h3>{name}</h3>
        {Object.entries(rest).map(
          ([name, val]) => <p key={name}><b>{name}</b>: {val}</p>,
        )}
      </S.Description>
    </S.Wrapper>
  );
};

export default MiniDescription;