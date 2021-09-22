import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsaStatisticsTableComponent} from './features/usa-statistics-table/usa-statistics-table.component';
import {RouterModule} from '@angular/router';
import {UiModule} from '../../components/ui/ui.module';
import {TranslocoModule} from '@ngneat/transloco';
import { StatByStateComponent } from './features/stat-by-state/stat-by-state.component';

@NgModule({
  declarations: [
    UsaStatisticsTableComponent,
    StatByStateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsaStatisticsTableComponent,
      },
    ]),
    UiModule,
    TranslocoModule,
  ],
})
export class UsaStatisticsModule {
}
