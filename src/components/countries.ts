export interface ICountries {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: any;
  borders: string[];
  area: number;
  maps: any;
  population: number;
  timezones: string[];
}
