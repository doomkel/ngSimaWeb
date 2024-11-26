import { Component } from '@angular/core';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CapturaCantidadesTcComponent } from 'src/app/features/captura-cantidades-tc/captura-cantidades-tc.component';
import { CapturaEstiloComponent } from 'src/app/features/captura-estilo/captura-estilo.component';
import { CapturaColoresComponent } from 'src/app/features/captura-colores/captura-colores.component';
import { BotonAprobarNotaComponent } from 'src/app/features/boton-aprobar-nota/boton-aprobar-nota.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, CapturaCantidadesTcComponent, CapturaEstiloComponent, CapturaColoresComponent, BotonAprobarNotaComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}
