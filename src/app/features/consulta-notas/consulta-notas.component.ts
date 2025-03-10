import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-notas',
  standalone: true,
  templateUrl: './consulta-notas.component.html',
  styleUrls: ['./consulta-notas.component.css'],
  imports: [CommonModule]
})
export class ConsultaNotasComponent {
  statusCapturada: boolean = false;
}
