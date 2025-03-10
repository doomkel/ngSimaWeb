import { Component } from '@angular/core';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { ListaNotificacionesComponent } from 'src/app/features/lista-notificaciones/lista-notificaciones.component';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [SidebarComponent, ListaNotificacionesComponent],
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {

}
