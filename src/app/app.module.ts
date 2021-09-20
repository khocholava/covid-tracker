import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from './transloco/transloco-root.module';
import {MatSliderModule} from '@angular/material/slider';
import {API_BASE_URL} from './tokens';
import {environment} from '../environments/environment';
import {CovidDataService} from './services/covid-data.service';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SpinnerComponent,
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
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.baseUrl,
      multi: true,
    },
    CovidDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
