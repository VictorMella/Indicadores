import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleIndicadoresComponent } from '../detalle/components/detalle-indicadores/detalle-indicadores.component'
import { ListaIndicadoresComponent } from './components/lista-indicadores/lista-indicadores.component'
import { IndicadorComponent } from './indicador.component'

const routes: Routes = [
  {
    path: '',
    component: IndicadorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadorRoutingModule { }
