export const point = 'https://restcountries.eu/rest/v2/name/';
const fields = '?fields=topLevelDomain;capital;region;subregion;population;borders;nativeName;currencies;languages;flag;';

export const getRestPoint = (countryName: string) => point + countryName + fields;