import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDetails, ISerie } from 'src/app/core/interfaces/details.interface'

@Component({
  selector: 'app-detalle-indicadores',
  templateUrl: './detalle-indicadores.component.html',
  styleUrls: ['./detalle-indicadores.component.scss']
})
export class DetalleIndicadoresComponent  {
  @Input() indicatorDetail: IDetails
  @Input() loading: boolean

  @Output() handleSeeDetails: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onVerDetalle({ fecha }, codigo: string): void {
    this.handleSeeDetails.emit({ fecha, codigo })
  }


}
