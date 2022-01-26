import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IIndicators } from 'src/app/core/interfaces/indicator.interfaces'
import { IPagination } from 'src/app/core/interfaces/pagination.interface'

@Component({
  selector: 'app-lista-indicadores',
  templateUrl: './lista-indicadores.component.html',
  styleUrls: ['./lista-indicadores.component.scss']
})
export class ListaIndicadoresComponent {
  @Input() pagination: IPagination
  @Input() loading: boolean
  @Input() indicatorsList: Array<IIndicators> = []

  @Output() handleChangePagination: EventEmitter<any> = new EventEmitter();
  @Output() handleSeeDetails: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onVerDetalle({ codigo }): void {
    this.handleSeeDetails.emit({ codigo })
  }

  onHandleChangePagination({ page, itemsPerPage }): void {
    this.handleChangePagination.emit({ page, itemsPerPage })
  }
}
