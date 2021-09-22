import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DayOneCountry} from '../../services/covid-date.types';
import {TableColumn} from '../../components/ui/components/table/table.types';
import {FormControl} from '@angular/forms';
import {CovidDataService} from '../../services/covid-data.service';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data$ = this.storeService.getData();
  countryData$: Observable<Array<DayOneCountry>> = this.covidDataService.getCountryData('GE');
  tableColumns: Array<TableColumn> = [];
  searchText: FormControl = new FormControl('');

  constructor(
    private covidDataService: CovidDataService,
    private storeService: StoreService,
  ) {
  }

  ngOnInit() {
    this.covidDataService.getData().subscribe();
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
        position: 'left',
      },
      {
        name: 'newDeaths',
        dataKey: 'NewDeaths',
        position: 'left',
      },
      {
        name: 'newRecovered',
        dataKey: 'NewRecovered',
        position: 'left',
      },
      {
        name: 'totalConfirmed',
        dataKey: 'TotalConfirmed',
        position: 'left',
      },
      {
        name: 'totalDeaths',
        dataKey: 'TotalDeaths',
        position: 'left',
      },

    ];
  }

  changeCountry($event: string) {
    this.countryData$ = this.covidDataService.getCountryData($event)
  }

}
