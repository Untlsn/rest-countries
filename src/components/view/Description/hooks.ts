import { useEffect, useState } from 'react';
import { County } from '~/types/County';
import { getRestPoint } from '~/components/view/Description/data';

export const useFetchCountry = (countryName: string) => {
  const [country, setCountry] = useState<County>();

  useEffect(() => {
    fetch(getRestPoint(countryName))
      .then(res => res.json())
      .then(data => setCountry(data[0]));
  }, [countryName]);

  return country;
};