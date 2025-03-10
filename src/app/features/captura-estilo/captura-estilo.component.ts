import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarcaService } from 'src/app/services/marca.service';
import { Marca } from 'src/app/models/marca.model';
import { FamiliaService } from 'src/app/services/familia.service';
import { Familia } from 'src/app/models/familia.model';
import { SubfamiliaService } from 'src/app/services/subfamilia.service';
import { SubFamilia } from 'src/app/models/subfamilia.model';
import { ClaseService } from 'src/app/services/clase.service';
import { Clase } from 'src/app/models/clase.model';

@Component({
  selector: 'app-captura-estilo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './captura-estilo.component.html',
  styleUrls: ['./captura-estilo.component.css']
})
export class CapturaEstiloComponent {
  marcas: Marca[] = [];
  familias: Familia[] = []; 
  subfamilias: SubFamilia[] = [];
  clases: Clase[] = [];
  

  constructor(private marcaService: MarcaService, private familiaService: FamiliaService, private subfamiliaService: SubfamiliaService, private claseService: ClaseService) { }

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(
      (data: Marca[]) => {
        this.marcas = data;
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );

    this.familiaService.getFamilias().subscribe(
      (data: Familia[]) => {
        this.familias = data;
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );

    //this.subfamiliaService.getSubfamilias().subscribe(
    //  (data: SubFamilia[]) => {
    //    this.subfamilias = data;
    //  },
    //  (error) => {
    //    console.error('HTTP error:', error);
    //  }
    //);

    this.claseService.getClases().subscribe(
      (data: Clase[]) => {
        this.clases = data;
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );

    
    
    
  }

}
