import { Component, TemplateRef, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { IDetails } from '../core/interfaces/details.interface'
import { IResponse } from '../core/interfaces/response.interface'
import { MainFactoryService } from '../core/services/main-factory.service'
import { UtilsService } from '../core/services/utils.service'
import { AdminService } from '../services/admin.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  codigoIndicador: string
  indicatorDetail: IDetails
  loading: boolean

  @ViewChild('modalInformation') modalInformation: TemplateRef<any>

  constructor(private adminService: AdminService,
    private utils: UtilsService,
    private router: Router,
    private mainFactory: MainFactoryService) {
    this.codigoIndicador = this.mainFactory.getData('codigoIndicador', true)
    if (this.codigoIndicador) {
      this.loading = true
      this.getDetalleIndicador(this.codigoIndicador)
    }
  }

  onHandleSeeDetails($event): void {
    console.log($event)
    this.utils.showModal(this.modalInformation, { id: 1, class: 'modal-md' });
  }

  private getDetalleIndicador(codigo: string): void {
    this.adminService.getDetalleIndicadores(codigo)
      .subscribe((resp: IResponse) => {
        if (resp.ok) {
          this.indicatorDetail = resp.data
        } else {
          this.indicatorDetail = undefined
        }
        this.loading = false
      }, error => {
        console.log(error)
        this.loading = false
      })
  }

}
