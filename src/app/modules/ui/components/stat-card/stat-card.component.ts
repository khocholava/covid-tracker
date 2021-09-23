import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {
  @Input() state!: string;
  @Input() death!: number;
  @Input() recovered!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
