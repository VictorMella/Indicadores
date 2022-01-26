import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleIndicadoresComponent } from './components/detalle-indicadores/detalle-indicadores.component'
import { DetalleComponent } from './detalle.component'

const routes: Routes = [{
  path: '',
  component: DetalleComponent,

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule { }
