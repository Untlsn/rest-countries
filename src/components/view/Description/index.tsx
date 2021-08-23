import React from 'react';
import * as S from './style';
import CountyInformation from '~/components/molecules/CountryInformation';
import { useFetchCountry } from '~/components/view/Description/hooks';
import { useParams } from 'react-router-dom';

const Description = () => {
  const countryName = useParams<{ country: string }>().country;
  const country = useFetchCountry(countryName);

  return (
    <S.Wrapper>
      <S.RelDiv>
        <S.BackButton />
        <S.Flag src={country?.flag} />
      </S.RelDiv>
      {country && <CountyInformation {...country} name={countryName} />}
    </S.Wrapper>
  );
};

export default Description;