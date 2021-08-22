export interface CountryInformationProps {
  name: string
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string
  topLevelDomain: string[]
  currencies: { name: string; }[]
  languages: { name: string; }[]
}