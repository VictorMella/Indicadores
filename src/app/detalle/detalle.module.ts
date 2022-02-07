import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { DetalleIndicadoresComponent } from './components/detalle-indicadores/detalle-indicadores.component'
import { SharedModule } from '../shared/shared.module';
import { GraficosComponent } from './components/graficos/graficos.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    DetalleComponent,
    DetalleIndicadoresComponent,
    GraficosComponent,
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class DetalleModule { }
