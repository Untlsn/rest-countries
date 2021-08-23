import { useEffect, useState } from 'react';
import { Country } from '~/types/Country';
import { getRestPoint } from '~/components/view/Description/data';

export const useFetchCountry = (countryName: string) => {
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    fetch(getRestPoint(countryName))
      .then(res => res.json())
      .then(data => setCountry(data[0]));
  }, [countryName]);

  return country;
};