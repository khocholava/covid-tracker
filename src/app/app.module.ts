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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {StoreService} from './services/store.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgApexchartsModule} from 'ng-apexcharts';
import {MatListModule} from '@angular/material/list';
import {SharedModule} from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './features/main/main.component';
import {UiModule} from './components/ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'usa-statistics',
    loadChildren: () => import('./modules/usa-statistics/usa-statistics.module').then(m => m.UsaStatisticsModule),
  },
];

@NgModule({
  declarations: [
    MainComponent,
    AppComponent
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
    NgApexchartsModule,
    MatListModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    UiModule,
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
    StoreService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
