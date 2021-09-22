import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableResponsiveDirective} from './directives/mat-table-responsive.directive';
import { FilterPipe } from './pipes/filter.pipe';
import {DataPropertyGetterPipe} from '../components/ui/components/table/data-property-getter.pipe';


@NgModule({
  declarations: [
    MatTableResponsiveDirective,
    FilterPipe,
    DataPropertyGetterPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatTableResponsiveDirective,
    FilterPipe,
    DataPropertyGetterPipe,
  ],
})
export class SharedModule {
}
