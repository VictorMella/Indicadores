import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableColumnDirective } from './directives/sortable-column.directive';
import { CurrencyPipe } from './pipes/currency.pipe';


@NgModule({
  declarations: [
    SortableColumnDirective,
    CurrencyPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortableColumnDirective,
    CurrencyPipe,
  ]
})
export class CoreModule { }
