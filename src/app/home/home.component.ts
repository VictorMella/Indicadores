import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { debounceTime } from 'rxjs/operators';
import { IPagination } from '../core/interfaces/pagination.interface';

import { IResponse } from '../core/interfaces/response.interface';
import { ISortDirection } from '../core/interfaces/sort-direction.interface';

import { AlertService } from '../core/services/alert.service';
import { UtilsService } from '../core/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  pagination: IPagination;

  form: FormGroup
  fielCheck: FormControl
  validForm: boolean;
  activeLoadingUploadFile: boolean;


  constructor(
    private alert: AlertService,
    private bsModalService: BsModalService,
    private utils: UtilsService,
    private localService: BsLocaleService,
    private formBuilder: FormBuilder,
  ) {
    this.validForm = true;
    this.localService.use('es');










  }

  ngOnInit(): void {
    this.pagination = this.utils.setPagitation(1, 10, 0);
    this.form = this.formBuilder.group({
      text: [null, Validators.required],
      number: [1, Validators.required],
      selectSimple: [null, Validators.required],
      selectMultiple: [null, Validators.required],
      date: null
    })

    this.fielCheck = new FormControl();
    this.fielCheck.setValidators(Validators.required)

    this.fielCheck.valueChanges
      .subscribe(console.log)

    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(form => {
        console.log(form);
      })

    this.form.controls['number'].valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        console.log(value);
      })
  }

  onHandleSortColumn({ column, direction }: ISortDirection): void {
    console.log({ column, direction });
  }

  onActionAlertSuccess(): void {
    this.alert.success('Alerta verde');
  }

  onActionAlertError(): void {
    this.alert.error('Alerta roja');
  }

  onOpenModal(modalTemplate: TemplateRef<any>): void {
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-lg',
    })
  }

  onOpenSecondModal(modalTemplate: TemplateRef<any>): void {
    this.bsModalService.show(modalTemplate, {
      id: 2, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-lg',
    })
  }

  onAddItem(item: any): void {
    console.log(item);
  }

  onRemoveItem({ value }): void {
    console.log(value);
  }

  onHandleChangePagination({ page, itemsPerPage }): void {
    console.log({ page, itemsPerPage });
  }

  onHandleToggleSwitch({ active }): void {
    console.log('toggleSwitch', active);

  }

  onOpenModalUploadFile(modalTemplate: TemplateRef<any>): void {
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-xl',
    })
  }

  onOpenModalConfirmationQuestion(modalTemplate: TemplateRef<any>): void {
    this.bsModalService.show(modalTemplate, {
      id: 1, // para poder levantar modal sobre modal se debe ir sumando un nivel.
      backdrop: true,
      class: 'modal-md',
    })
  }

  onSubmitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.validForm = false;
      this.alert.error('Valide formulario')
    }
  }

  onHandleConfirm(): void {
    console.log('Confirm Action');
  }

  onValidateErrorFields(field: string): boolean {
    return !this.validForm && this.form.get(field).invalid
  }





}
