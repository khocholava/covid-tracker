import {Component, OnInit} from '@angular/core';
import {CovidDataService} from '../../../../services/covid-data.service';
import {TableColumn} from '../../../../components/ui/components/table/table.types';

@Component({
  selector: 'app-usa-statistics-table',
  templateUrl: './usa-statistics-table.component.html',
  styleUrls: ['./usa-statistics-table.component.scss'],
})
export class UsaStatisticsTableComponent implements OnInit {
  data$ = this.covidDataService.getUsaCurrentStats();
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
