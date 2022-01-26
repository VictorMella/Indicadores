import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadorRoutingModule } from './indicador-routing.module';
import { IndicadorComponent } from './indicador.component';
import { SharedModule } from '../shared/shared.module';
import { ListaIndicadoresComponent } from './components/lista-indicadores/lista-indicadores.component';


@NgModule({
  declarations: [
    IndicadorComponent,
    ListaIndicadoresComponent,
  ],
  imports: [
    CommonModule,
    IndicadorRoutingModule,
    SharedModule
  ]
})
export class IndicadorModule { }
