import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LoginComponent } from './core/login/login.component';
import { CapturaCantidadesTcComponent } from './features/captura-cantidades-tc/captura-cantidades-tc.component';
import { LayoutComponent } from './core/layout/layout.component';
import { TablaCapturaComponent } from './features/tabla-captura/tabla-captura.component';
import { CapturaEstiloComponent } from './features/captura-estilo/captura-estilo.component';
import { ConsultaNotasComponent } from './features/consulta-notas/consulta-notas.component';
import { ConsultaComponent } from './core/consulta/consulta.component';
import { CapturaColoresComponent } from './features/captura-colores/captura-colores.component';

const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },  
  {
    path: 'colores',
    component: CapturaColoresComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
