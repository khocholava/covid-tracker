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
