import {Component, Input, OnInit} from '@angular/core';
import {CovidStatusType} from '../../services/covid-date.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() totalCount!: number;
  @Input() covidStatus!: CovidStatusType;
  @Input() percentage!: string;
  @Input() color!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
