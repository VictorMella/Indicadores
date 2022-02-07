import { DatePipe } from '@angular/common'
import { Component } from '@angular/core'
import { IResponse } from 'src/app/core/interfaces/response.interface'
import { MainFactoryService } from 'src/app/core/services/main-factory.service'
import { AdminService } from 'src/app/services/admin.service'

@Component({
  selector: 'app-info-indicator',
  templateUrl: './info-indicator.component.html',
  styleUrls: ['./info-indicator.component.scss'],
  providers: [DatePipe]
})
export class InfoIndicatorComponent {
  fecha: string
  nombre: string
  medida: string
  valor: string
  loading: boolean
  constructor(private mainFactory: MainFactoryService, public datePipe: DatePipe, private adminService: AdminService) {
    this.getData()
  }

  private getData(): void {
    this.loading = true
    const data = this.mainFactory.getData('infoDetail')
    this.adminService.getDetalleIndicador(data.codigo, data.fecha)
      .subscribe((resp: IResponse) => {
        if (resp.ok) {
          this.fecha = this.datePipe.transform(resp.data.serie[0].fecha, 'dd-MM-yyyy', 'es')
          this.valor = resp.data.serie[0].valor.toLocaleString()
          this.nombre = resp.data.nombre
          this.medida = resp.data.unidad_medida
        }
        this.loading = false
      }, error => {
        console.log(error)
      })
  }



}
