import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-prenotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-prenotas.component.html',
  styleUrls: ['./tabla-prenotas.component.css']
})
export class TablaPrenotasComponent {
  statusCapturada: boolean = false;
}
