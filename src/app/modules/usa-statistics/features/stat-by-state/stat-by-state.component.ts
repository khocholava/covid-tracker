import {Component, Input, OnInit} from '@angular/core';
import {CovidDataService} from '../../../../services/covid-data.service';
import {Observable} from 'rxjs';
import {DayOneCountry, UsaStatByState} from '../../../../services/covid-date.types';

@Component({
  selector: 'app-stat-by-state',
  templateUrl: './stat-by-state.component.html',
  styleUrls: ['./stat-by-state.component.scss'],
})
export class StatByStateComponent implements OnInit {
  @Input() data$!: Observable<Array<UsaStatByState>>;

  constructor(
    private covidDataService: CovidDataService,
  ) {
  }

  ngOnInit(): void {
  }
}
