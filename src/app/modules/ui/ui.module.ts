import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CardComponent} from './components/card/card.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {TableComponent} from './components/table/table.component';
import {CoronaChartComponent} from './components/corona-chart/corona-chart.component';
import {CountryListComponent} from './components/country-list/country-list.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TranslocoModule} from '@ngneat/transloco';
import {MatTableModule} from '@angular/material/table';
import {SharedModule} from '../../shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SpinnerComponent,
    TableComponent,
    CoronaChartComponent,
    CountryListComponent,
    StatCardComponent,
  ],
  exports: [
    TableComponent,
    CoronaChartComponent,
    CountryListComponent,
    CardComponent,
    NavbarComponent,
    StatCardComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    MatFormFieldModule,
    TranslocoModule,
    MatTableModule,
    SharedModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class UiModule {
}
