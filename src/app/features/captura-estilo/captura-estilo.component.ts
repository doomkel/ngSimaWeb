import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { MarcaService } from 'src/app/services/marca.service';
import { Marca } from 'src/app/models/marca.model';
import { FamiliaService } from 'src/app/services/familia.service';
import { Familia } from 'src/app/models/familia.model';
import { SubfamiliaService } from 'src/app/services/subfamilia.service';
import { SubFamilia } from 'src/app/models/subfamilia.model';
import { ClaseService } from 'src/app/services/clase.service';
import { Clase } from 'src/app/models/clase.model';
import { Prenota } from 'src/app/models/prenota.model';
import { Imagen } from 'src/app/models/imagen.model';



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
  selectedImage: string | ArrayBuffer | null = null;
  imagen: Imagen = {
    id: 0,
    Estilo: '',
    Imagen: new ArrayBuffer(0)
  }
  prenota: Prenota = {
    Id: 0,    
    Fecha: '',
    Cajas: '',
    Estilo: '',
    Estilo2: '',
    Marca: 1,
    Familia: 1,
    Subfamilia: 1,
    Tallaje: 'CH-M-G-XG',
    Descrip: '',
    Status: ''
  };

  selectedFamilia: Familia = {
    idFamilia: 1,
    familia: '0',
    codigoFiscal: '0',
    status: 0
  };


  constructor(private sharedService: SharedService, private marcaService: MarcaService, private familiaService: FamiliaService, private subfamiliaService: SubfamiliaService, private claseService: ClaseService) { }

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

    this.getSubFamilias(this.selectedFamilia);

    this.claseService.getClases().subscribe(
      (data: Clase[]) => {
        this.clases = data;
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );

    
  }

  onEstiloChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    this.prenota.Estilo = inputElement.value;
    this.sharedService.updatePrenota(this.prenota);    
  }

  onEstilo2Change(event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    this.prenota.Estilo2 = inputElement.value;
    this.sharedService.updatePrenota(this.prenota);    
  }

  onMarcaChange(event: Event): void {
    const inputElement = event.target as HTMLSelectElement; 
    this.prenota.Marca = parseInt(inputElement.value);
    this.sharedService.updatePrenota(this.prenota);
  }

  onFamiliaChange(event: Event): void {
    const inputElement = event.target as HTMLSelectElement;
    const idFamilia = parseInt(inputElement.value);
    this.selectedFamilia.idFamilia = idFamilia;
    this.prenota.Familia = idFamilia;
    this.getSubFamilias(this.selectedFamilia);
    this.sharedService.updatePrenota(this.prenota);    
  }

  onSubFamiliaChange(event: Event): void {
    const inputElement = event.target as HTMLSelectElement; 
    this.prenota.Subfamilia = parseInt(inputElement.value);
    this.sharedService.updatePrenota(this.prenota);    
  }

  onTallajeChange(event: Event): void {
    const inputElement = event.target as HTMLSelectElement; 
    this.prenota.Tallaje = inputElement.value;
    this.sharedService.updatePrenota(this.prenota);
    this.sharedService.changeTallaje(this.prenota.Tallaje);
  }
  
  onDescripChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    this.prenota.Descrip = inputElement.value;
    this.sharedService.updatePrenota(this.prenota);    
  }

  onCajasChange(event: Event): void {    
    const inputElement = event.target as HTMLInputElement; 
    this.prenota.Cajas = inputElement.value;
    this.sharedService.updatePrenota(this.prenota);    
    console.log(this.prenota);
  }
  

  onFileChange(event: any): void {
    const file = event.target.files[0];    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.selectedImage = e.target.result;
          if (this.selectedImage instanceof ArrayBuffer) {
            this.imagen.Imagen = this.selectedImage;
          } else if (typeof this.selectedImage === 'string') {
            // Convert base64 string to ArrayBuffer if needed
            const base64 = this.selectedImage.split(',')[1];
            const binaryString = window.atob(base64);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            this.imagen.Imagen = bytes.buffer;
          }          
          // Ensure Estilo is synchronized for image upload
          this.imagen.Estilo = this.prenota.Estilo;
          this.sharedService.updateImage(this.imagen);
        }
      };
      reader.readAsDataURL(file);
    }    
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.onFileChange({ target: { files: [file] } });
      if (this.selectedImage instanceof ArrayBuffer) {
        this.imagen.Imagen = this.selectedImage;
      } else if (typeof this.selectedImage === 'string') {
        // Convert base64 string to ArrayBuffer if needed
        const base64 = this.selectedImage.split(',')[1];
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        this.imagen.Imagen = bytes.buffer;
      }
      this.imagen.Estilo = this.prenota.Estilo;
      this.sharedService.updateImage(this.imagen);
    }
  }

  getSubFamilias(familia: Familia) {
    this.subfamiliaService.getSubfamilias(familia).subscribe(
      (data: SubFamilia[]) => {
        this.subfamilias = data;        
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );
  }


}
