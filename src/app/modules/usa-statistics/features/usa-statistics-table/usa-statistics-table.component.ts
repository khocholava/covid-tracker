import {Component, OnInit} from '@angular/core';
import {CovidDataService} from '../../../../services/covid-data.service';
import {TableColumn} from '../../../ui/components/table/table.types';
import {Observable} from 'rxjs';
import {UsaStatByState} from '../../../../services/covid-date.types';

@Component({
  selector: 'app-usa-statistics-table',
  templateUrl: './usa-statistics-table.component.html',
  styleUrls: ['./usa-statistics-table.component.scss'],
})
export class UsaStatisticsTableComponent implements OnInit {
  data$ = this.covidDataService.getUsaCurrentStats();
  dataByState$:Observable<Array<UsaStatByState>> = this.covidDataService.getUsaStatsByState()
  tableColumns: Array<TableColumn> = [];


  constructor(
    private covidDataService: CovidDataService,
  ) {
  }

  ngOnInit(): void {
    this.initializeColumns();
  }

  initializeColumns() {
    this.tableColumns = [
      {
        name: 'positive',
        dataKey: 'positive',
        position: 'left',
      },
      {
        name: 'negative',
        dataKey: 'negative',
        position: 'left',
      },
      {
        name: 'death',
        dataKey: 'death',
        position: 'left',
      },
    ];
  }
}
