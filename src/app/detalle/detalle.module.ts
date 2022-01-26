import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { DetalleIndicadoresComponent } from './components/detalle-indicadores/detalle-indicadores.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DetalleComponent,
    DetalleIndicadoresComponent,
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    SharedModule
  ]
})
export class DetalleModule { }
