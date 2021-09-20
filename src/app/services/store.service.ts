import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CovidStatData} from './covid-date.types';

@Injectable()
export class StoreService {
  private countries$ = new BehaviorSubject<Array<string>>([]);
  private data$ = new BehaviorSubject<CovidStatData | null>(null);

  constructor() {
  }

  getData(): Observable<CovidStatData> {
    return this.data$!.asObservable() as Observable<CovidStatData>;
  }

  setData(data: CovidStatData) {
    this.data$?.next({majorStats: data.majorStats, countries: data.countries});
  }

  getCountries(): Observable<Array<string>> {
    return this.countries$.asObservable();
  }

  setCountries(countries: Array<string>) {
    this.countries$!.next(countries);
  }


}
