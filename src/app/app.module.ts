import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from './transloco/transloco-root.module';
import {MatSliderModule} from '@angular/material/slider';
import {COVID_TRACKING_API_BASE_URL, SUMMARY_API_BASE_URL} from './tokens';
import {environment} from '../environments/environment';
import {CovidDataService} from './services/covid-data.service';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {StoreService} from './services/store.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import {MatButtonModule} from '@angular/material/button';
import { DataPropertyGetterPipe } from './components/table/data-property-getter.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SpinnerComponent,
    TableComponent,
    DataPropertyGetterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: COVID_TRACKING_API_BASE_URL,
      useValue: environment.covidTrackingUrl,
      multi: true,
    },
    {
      provide: SUMMARY_API_BASE_URL,
      useValue: environment.summaryUrl,
      multi: true,
    },
    CovidDataService,
    StoreService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
