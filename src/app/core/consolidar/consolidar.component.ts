import { Component } from '@angular/core';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { TablaPrenotasComponent } from 'src/app/features/tabla-prenotas/tabla-prenotas.component';
import { BotonAprobarNotaComponent } from 'src/app/features/boton-aprobar-nota/boton-aprobar-nota.component';

@Component({
  selector: 'app-consolidar',
  standalone:true,
  imports:[SidebarComponent, TablaPrenotasComponent, BotonAprobarNotaComponent],
  templateUrl: './consolidar.component.html',
  styleUrls: ['./consolidar.component.css']
})
export class ConsolidarComponent {

}
