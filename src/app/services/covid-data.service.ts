import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from '../tokens';
import {map, tap} from 'rxjs/operators';
import {CovidSummaryCountryType, CovidSummaryGlobalType, CovidSummaryType} from './covid-date.types';

@Injectable()
export class CovidDataService {

  constructor(
    private http: HttpClient,
    @Inject(API_BASE_URL) private  baseUrl: string
  ) { }

  getData() {
    return this.http.get("https://api.covid19api.com/summary").pipe(
      map((response: Partial<CovidSummaryType>) => {
        const { Global, Countries } = response;
        const {
          NewConfirmed,
          TotalConfirmed,
          NewDeaths,
          TotalDeaths,
          NewRecovered,
          TotalRecovered
        } = Global as CovidSummaryGlobalType;
        const majorStats = [
          {
            title: "Total Confirmed",
            stat: TotalConfirmed,
            percentage: ((NewConfirmed / TotalConfirmed) * 100).toFixed(2),
            color: "#F9345E"
          },
          {
            title: "Active Confirmed",
            stat: NewConfirmed,
            percentage: ((NewConfirmed / TotalConfirmed) * 100).toFixed(2),
            color: "#FA6400"
          },
          {
            title: "Total Recovered",
            stat: TotalRecovered,
            percentage: ((NewRecovered / TotalRecovered) * 100).toFixed(2),
            color: "#1CB142"
          },
          {
            title: "Total Deaths",
            stat: TotalDeaths,
            percentage: ((NewDeaths / TotalDeaths) * 100).toFixed(2),
            color: "#6236FF"
          }
        ];
        return {
          majorStats,
          countries: Countries?.sort(
            (countryA: CovidSummaryCountryType, countryB: CovidSummaryCountryType) =>
              countryB.NewConfirmed - countryA.NewConfirmed
          )
        };
      }),
      tap(console.log)
    );
  }

}
