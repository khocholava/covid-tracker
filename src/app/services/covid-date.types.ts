export interface CovidSummaryType {
  ID: string;
  Message: string;
  Global: CovidSummaryGlobalType;
  Countries: Array<CovidSummaryCountryType>;
  Date: string;
}

export interface CovidSummaryGlobalType {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string
}


export interface CovidStatData {
  majorStats: Array<MajorCovidStats>;
  countries: Array<CovidSummaryCountryType> | undefined;
}

export interface CovidSummaryCountryType {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed:  number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string
}


export interface MajorCovidStats {
  title: CovidStatusType;
  stat: number
  percentage: string
  color: string,
}
export enum COVID_STATUS {
  TotalConfirmed = 'Total Confirmed',
  ActiveConfirmed = 'Active Confirmed',
  TotalRecovered = 'Total Recovered',
  TotalDeaths = 'Total Deaths'
}

export type CovidStatusType = 'Total Confirmed' | 'Active Confirmed' | 'Total Recovered' | 'Total Deaths'
