import { Component } from '@angular/core';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component'; 
import { GraficasNotasComponent } from 'src/app/features/graficas-notas/graficas-notas.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SidebarComponent, GraficasNotasComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

}
