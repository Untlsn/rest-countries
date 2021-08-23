import { useEffect, useState } from 'react';
import { CountryMini } from '~/types/Country';
import { getRegionRestPoint, getRestPoint } from '~/components/view/Search/data';

export const useFetchCountries = ({ region, name }: { region: string, name: string }) => {
  const [countries, setCountries] = useState<CountryMini[]>([]);

  useEffect(() => {
    if (region || name) {
      fetch(name ? getRestPoint(name) : getRegionRestPoint(region))
        .then(res => res.json())
        .then(data => setCountries(data.status == 404? [] : data));
    }
  }, [region, name]);

  return countries;
};