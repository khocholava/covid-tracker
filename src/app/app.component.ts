import {Component, OnInit} from '@angular/core';
import {CovidDataService} from './services/covid-data.service';
import {StoreService} from './services/store.service';
import {TableColumn} from './components/table/table.types';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'corona-tracker';
  data$ = this.storeService.getData();
  countries$ = this.storeService.getCountries();
  tableColumns: Array<TableColumn> = []
  constructor(
    private covidDataService: CovidDataService,
    private storeService: StoreService,
    private translocoService: TranslocoService
  ) {
  }

  ngOnInit() {
    this.covidDataService.getData().subscribe();
    this.covidDataService.getCountries().subscribe();
    this.initializeColumns();
  }

  initializeColumns(): void {
    this.tableColumns = [
      {
        name: 'country',
        dataKey: 'Country',
        position: 'left',
      },
      {
        name: 'newConfirmed',
        dataKey: 'NewConfirmed',
        position: 'left'
      },
      {
        name: 'newDeaths',
        dataKey: 'NewDeaths',
        position: 'left'
      },
      {
        name: 'newRecovered',
        dataKey: 'NewRecovered',
        position: 'left'
      },
      {
        name: 'totalConfirmed',
        dataKey: 'TotalConfirmed',
        position: 'left'
      },
      {
        name: 'totalDeaths',
        dataKey: 'TotalDeaths',
        position: 'left'
      },

    ]
  }
}
