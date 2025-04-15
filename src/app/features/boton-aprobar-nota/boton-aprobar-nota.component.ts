import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
import { PrenotaService } from 'src/app/services/prenota.service';
import { Prenota } from 'src/app/models/prenota.model';
import { MessageModalComponent } from 'src/app/shared/message-modal/message-modal.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { format } from 'date-fns';

@Component({
  selector: 'app-boton-aprobar-nota',
  standalone: true,
  imports: [CommonModule, MessageModalComponent],
  templateUrl: './boton-aprobar-nota.component.html',
  styleUrls: ['./boton-aprobar-nota.component.css']
}
)

export class BotonAprobarNotaComponent implements OnInit {
  constructor(private sharedService:SharedService, private prenotaService:PrenotaService, private http:HttpClient) {}
  private url = "https://localhost:7100/api/prenotas";
  
  @Input() labelTipo: string = 'Prenota:';
  @Input() labelProceso: string = 'GUARDAR';
  nextId: number = 0;
  message: string = '';
  isModalVisible = false;

  prenota: Prenota = {
    Id: 0,    
    Fecha: '',
    Cajas: '',
    Estilo: '',
    Estilo2: '',
    Marca: 1,
    Familia: 1,
    Subfamilia: 1,
    Tallaje: '',
    Descrip: '',
    Status: ''
  };

  ngOnInit(): void {
    this.prenotaService.getNextId().subscribe(
      (Data: number) => {
        this.nextId = Data;
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );
    
    this.sharedService.currentPrenota.subscribe((prenota) => {
      this.prenota = prenota;
    });
  }

  onClickGuardar(event: Event): void {
    event.preventDefault();
    const date = new Date();    
    const formattedDate = format(date, 'yyyy-MM-dd');
    this.prenota.Status = 'Capturada';
    this.prenota.Fecha = formattedDate;
    this.prenota.Id = this.nextId ;

    this.createPrenota(this.prenota).subscribe(
      (response) => {
        this.message = 'Nota ' + this.nextId + ' creada correctamente';
        this.isModalVisible = true;
      },
      (error) => {
        this.message = 'Error: ' + error;
        this.isModalVisible = true;
      }
    );
  }

  createPrenota(prenota: Prenota): Observable<Prenota> {
    return this.http.post<Prenota>(this.url, prenota);
  }

  onModalClose(): void {
    this.isModalVisible = false; 
    if (this.message.includes('correctamente')) {
      window.location.reload(); 
    }
  }
}
