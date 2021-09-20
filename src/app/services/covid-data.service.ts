import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {COVID_TRACKING_API_BASE_URL, SUMMARY_API_BASE_URL} from '../tokens';
import {map, tap} from 'rxjs/operators';
import {
  COVID_STATUS,
  CovidStatData,
  CovidSummaryCountryType,
  CovidSummaryGlobalType,
  CovidSummaryType,
} from './covid-date.types';
import {StoreService} from './store.service';
import {Observable} from 'rxjs';

@Injectable()
export class CovidDataService {

  constructor(
    private http: HttpClient,
    @Inject(COVID_TRACKING_API_BASE_URL) private baseUrl: string,
    @Inject(SUMMARY_API_BASE_URL) private summaryUrl: string,
    private storeService: StoreService,
  ) {
  }

  getData(): Observable<CovidStatData> {
    return this.http.get<CovidSummaryType>('https://api.covid19api.com/summary').pipe(
      map((response: Partial<CovidSummaryType>) => {
        const {Global, Countries} = response;
        const {
          NewConfirmed,
          TotalConfirmed,
          NewDeaths,
          TotalDeaths,
          NewRecovered,
          TotalRecovered,
        } = Global as CovidSummaryGlobalType;
        const majorStats = [
          {
            title: COVID_STATUS.TotalConfirmed,
            stat: TotalConfirmed,
            percentage: ((NewConfirmed / TotalConfirmed) * 100).toFixed(2),
            color: '#F9345E',
          },
          {
            title: COVID_STATUS.ActiveConfirmed,
            stat: NewConfirmed,
            percentage: ((NewConfirmed / TotalConfirmed) * 100).toFixed(2),
            color: '#FA6400',
          },
          {
            title: COVID_STATUS.TotalRecovered,
            stat: TotalRecovered,
            percentage: ((NewRecovered / TotalRecovered) * 100).toFixed(2),
            color: '#1CB142',
          },
          {
            title: COVID_STATUS.TotalDeaths,
            stat: TotalDeaths,
            percentage: ((NewDeaths / TotalDeaths) * 100).toFixed(2),
            color: '#6236FF',
          },
        ];
        return {
          majorStats,
          countries: Countries?.sort(
            (countryA: CovidSummaryCountryType, countryB: CovidSummaryCountryType) =>
              countryB.NewConfirmed - countryA.NewConfirmed,
          ),
        };
      }),
      tap(data => this.storeService.setData(data)),
    );
  }

  getCountries(): Observable<Array<string>> {
    return this.storeService.getData().pipe(
      map(item => {
        return item.countries!.map(item => item!.Country)
      }),
      tap(countries => this.storeService.setCountries(countries))
    )
  }

}
