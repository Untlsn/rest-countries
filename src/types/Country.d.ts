export interface CountryBase {
  flag: string,
  population: number
  region: string
  capital: string
}

export interface Country extends CountryBase {
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  currencies: { name: string; }[]
  languages: { name: string; }[]
}

export interface CountryMini extends CountryBase {
  name: string
}