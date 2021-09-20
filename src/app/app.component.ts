import {Component, OnInit} from '@angular/core';
import {CovidDataService} from './services/covid-data.service';
import {StoreService} from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'corona-tracker';
  data$ = this.storeService.getData();
  countries$ = this.storeService.getCountries();

  constructor(
    private covidDataService: CovidDataService,
    private storeService: StoreService,
  ) {
  }

  ngOnInit() {
    this.covidDataService.getData().subscribe();
    this.covidDataService.getCountries().subscribe();
  }
}
