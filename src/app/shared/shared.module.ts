import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './components/modal/modal.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CoreModule } from '../core/core.module';
import { InfoIndicatorComponent } from './components/info-indicator/info-indicator.component';

@NgModule({
  declarations: [

    ModalComponent,
    PaginatorComponent,


    InfoIndicatorComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    RatingModule.forRoot(),
    NgxSkeletonLoaderModule,
    TooltipModule.forRoot(),
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    TranslateModule
  ],
  exports: [

    ModalComponent,
    PaginatorComponent,

    ReactiveFormsModule,
    InfoIndicatorComponent,
    FormsModule,
    RatingModule,
    NgxSkeletonLoaderModule,
    TooltipModule,
    NgSelectModule,
    BsDatepickerModule,
    TranslateModule
  ],
  providers: [
    BsModalRef,
    BsModalService
  ]
})
export class SharedModule { }
