import { Injectable, TemplateRef } from '@angular/core'
import { IPagination } from '../interfaces/pagination.interface'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal'
import { IIndicators } from '../interfaces/indicator.interfaces'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http: HttpClient,
    private bsModalService: BsModalService
  ) { }

  public setPagitation(currentPage: number, itemsPerPage: number, total: number): IPagination {
    return {
      currentPage,
      itemsPerPage,
      sizes: [10, 20, 50, 100],
      total
    }
  }

  public showXml(xml: string): void {
    const blob = new Blob([xml], { type: 'text/xml' })
    const url = URL.createObjectURL(blob)
    window.open(url, '', 'width=1000,height=9000')
    URL.revokeObjectURL(url)
  }

  public sortData(data, column, direction): any[] {
    const sortOrder = direction === 'asc' ? 1 : -1
    return data.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1 * sortOrder
      } else if (a[column] > b[column]) {
        return 1 * sortOrder
      } else {
        return 0 * sortOrder
      }
    })
  }

  public showModal(modalTemplate: TemplateRef<any>, config: ModalOptions): void {
    this.bsModalService.show(modalTemplate, { backdrop: false, ...config })
  }

  public closeModal(nivel?: number): void {
    this.bsModalService.hide(nivel)
    this.bsModalService.removeBackdrop()
  }

  public typeIndicators(): any {
    return ['uf', 'ivp', 'dolar', 'dolar_intercambio', 'euro', 'ipc', 'utm', 'imacec', 'tpm', 'libra_cobre',
      'tasa_desempleo',
      'bitcoin']
  }

}
