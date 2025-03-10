import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-aprobar-nota',
  standalone: true,
  templateUrl: './boton-aprobar-nota.component.html',
  styleUrls: ['./boton-aprobar-nota.component.css']
})
export class BotonAprobarNotaComponent {
  @Input() labelTipo: string = 'Prenota:';
  @Input() labelProceso: string = 'GUARDAR';
}
