import { Component } from '@angular/core';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { ConsultaNotasComponent } from 'src/app/features/consulta-notas/consulta-notas.component';

@Component({
  selector: 'app-consulta',
  standalone:true,
  imports:[ConsultaNotasComponent, SidebarComponent],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

}
