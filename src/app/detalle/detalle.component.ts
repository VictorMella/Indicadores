import { Component, TemplateRef, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { IDetails, ISerie } from '../core/interfaces/details.interface'
import { IResponse } from '../core/interfaces/response.interface'
import { MainFactoryService } from '../core/services/main-factory.service'
import { UtilsService } from '../core/services/utils.service'
import { AdminService } from '../services/admin.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  providers: [DatePipe]
})
export class DetalleComponent {
  codigoIndicador: string
  indicatorDetail: IDetails
  grafics: Array<ISerie>
  loading: boolean

  @ViewChild('modalInformation') modalInformation: TemplateRef<any>

  constructor(private adminService: AdminService,
    private utils: UtilsService,
    private router: Router,
    public datePipe: DatePipe,
    private mainFactory: MainFactoryService) {
    this.codigoIndicador = this.mainFactory.getData('codigoIndicador', true)
    if (this.codigoIndicador) {
      this.grafics = []
      this.loading = true
      this.getDetalleIndicador(this.codigoIndicador)
    }
  }

  onHandleSeeDetails($event): void {
    const fecha = this.datePipe.transform($event.fecha, 'dd-MM-yyyy', 'es')
    this.mainFactory.setData('infoDetail', { codigo: $event.codigo, fecha })
    this.utils.showModal(this.modalInformation, { id: 1, class: 'modal-md' });
  }

  onHandleSeeDetailsIndicators($event): void {
    this.mainFactory.setData('infoDetail', { codigo: $event.codigo, fecha: $event.name })
    this.utils.showModal(this.modalInformation, { id: 1, class: 'modal-md' });
  }

  private getDetalleIndicador(codigo: string): void {
    this.adminService.getDetalleIndicadores(codigo)
      .subscribe((resp: IResponse) => {
        if (resp.ok) {
          this.indicatorDetail = resp.data
          this.grafics = this.indicatorDetail.serie
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
