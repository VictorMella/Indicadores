import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/indicadores',
    pathMatch: 'full'
  },
  {
    path: 'indicadores',
    loadChildren: () => import('./indicador/indicador.module').then(mod => mod.IndicadorModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalle/detalle.module').then(mod => mod.DetalleModule)
  },

  {
    path: '**',
    redirectTo: '/indicadores',
    pathMatch: 'full'
  }



]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
