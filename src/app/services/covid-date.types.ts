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
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
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

export interface DayOneCountry {
  Country: string,
  CountryCode: string,
  Province: string,
  City: string,
  CityCode: string,
  Lat: string,
  Lon: string,
  Confirmed: number,
  Deaths: number,
  Recovered: number,
  Active: number,
  Date: string
}

export interface UsaCurrentStatistics {
  date: string;
  states: number;
  positive: number;
  negative: number;
  pending: number
  hospitalizedCurrently: number
  hospitalizedCumulative: number
  death: number
  hospitalized: number
}

export interface UsaStatByState extends UsaCurrentStatistics{
  state: string;
}

export type CovidStatusType = 'Total Confirmed' | 'Active Confirmed' | 'Total Recovered' | 'Total Deaths'
