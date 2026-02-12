import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prenota } from 'src/app/models/prenota.model';
import { PrenotaService } from 'src/app/services/prenota.service';

@Component({
  selector: 'app-tabla-prenotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-prenotas.component.html',
  styleUrls: ['./tabla-prenotas.component.css']
})
export class TablaPrenotasComponent {
  statusCapturada: boolean = false;
  prenotas: Prenota[] = [];
  loading = true;
  error: string | null = null;

  constructor(private prenotaService: PrenotaService) {}

  ngOnInit(): void {
    this.prenotaService.getPrenotas().subscribe({
      next: (data) => {
        console.log('Prenotas recibidas:', data);
        this.prenotas = Array.isArray(data) ? data : [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error obteniendo prenotas', err);
        this.error = err?.message || 'No se pudo cargar las prenotas';
        this.loading = false;
      }
    });
  }
}
