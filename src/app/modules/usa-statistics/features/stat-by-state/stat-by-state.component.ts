import {Component, OnInit} from '@angular/core';
import {CovidDataService} from '../../../../services/covid-data.service';
import {Observable} from 'rxjs';
import {UsaStatByState} from '../../../../services/covid-date.types';

@Component({
  selector: 'app-stat-by-state',
  templateUrl: './stat-by-state.component.html',
  styleUrls: ['./stat-by-state.component.scss'],
})
export class StatByStateComponent implements OnInit {
  data$: Observable<Array<UsaStatByState>> = this.covidDataService.getUsaStatsByState()

  constructor(
    private covidDataService: CovidDataService,
  ) {
  }

  ngOnInit(): void {
  }
}
