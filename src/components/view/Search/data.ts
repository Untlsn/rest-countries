import { point as namePoint } from '~/components/view/Description/data';

export const regions = [
  'africa',
  'americas',
  'asia',
  'europe',
  'oceania',
];

const regionPoint = 'https://restcountries.eu/rest/v2/region/';
const fields = '?fields=name;flag;population;region;capital;';

export const getRegionRestPoint = (region: string) => regionPoint + region + fields;
export const getRestPoint = (name: string) => namePoint + name + fields;