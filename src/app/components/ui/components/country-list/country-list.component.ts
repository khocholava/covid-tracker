import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CovidSummaryCountryType} from '../../../../services/covid-date.types';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  @Output() listClick = new EventEmitter();
  @Input() countries!: Array<CovidSummaryCountryType> | undefined;
  searchText: FormControl = new FormControl('');

  get showSearch() {
    return this.searchText.value ? InputIconEnum.CLEAR : InputIconEnum.SEARCH
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  clickList(value: string) {
    this.listClick.emit(value);
  }

}


enum InputIconEnum {
  CLEAR = 'clear',
  SEARCH = 'search'
}
