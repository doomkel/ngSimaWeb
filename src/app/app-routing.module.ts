import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ConsultaComponent } from './core/consulta/consulta.component';
import { NotificacionesComponent } from './core/notificaciones/notificaciones.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { ConsolidarComponent } from './core/consolidar/consolidar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  {
    path: 'main',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'notificaciones',
    component: NotificacionesComponent
  },
  { path: 'inicio', 
    component: InicioComponent 
  },
  { path: 'consolidar', 
    component: ConsolidarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
