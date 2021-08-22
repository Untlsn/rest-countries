import React from 'react';
import * as S from './style';
import { joinNames, numberPrettier } from './helpers';
import { CountryInformationProps } from './types';
import InformationPoint from '~/components/atoms/InformationPoint';

const CountryInformation = (country: CountryInformationProps) => {
  return (
    <S.Wrapper>
      <S.H1NoTop>{country.name}</S.H1NoTop>
      <S.NestInfo>
        <div>
          <InformationPoint name='native name' data={country.nativeName} />
          <InformationPoint name='population' data={numberPrettier(country.population)} />
          <InformationPoint name='region' data={country.region} />
          <InformationPoint name='sum region' data={country.subregion} />
          <InformationPoint name='capital' data={country.capital} />
        </div>
        <div>
          <InformationPoint name='top level domain' data={country.topLevelDomain.join(', ')} loCase/>
          <InformationPoint name='currencies' data={joinNames(country.currencies)} />
          <InformationPoint name='languages' data={joinNames(country.languages)} />
        </div>
      </S.NestInfo>
    </S.Wrapper>
  );
};

export default CountryInformation;