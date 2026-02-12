import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Prenota } from '../models/prenota.model';
import { Imagen } from '../models/imagen.model';

export interface SelectedColor {
  color: string;
  tailwindColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
  
  private colorSource = new BehaviorSubject<SelectedColor | null>(null);
  private tallajeSource = new BehaviorSubject<string>('');
  currentColor = this.colorSource.asObservable();
  currentTallaje = this.tallajeSource.asObservable();

  private prenotaSource = new BehaviorSubject<Prenota>({
    Id: 0,    
    Fecha: '',
    Cajas: '',
    Estilo: '',
    Estilo2: '',
    Marca: 0,
    Familia: 0,
    Subfamilia: 0,
    Tallaje: '',
    Descrip: '',
    Status: ''
  });

  private imagenSource = new BehaviorSubject<Imagen>({
    id: 0,
    Estilo: '',
    Imagen: new ArrayBuffer(0)
  });
  
  currentPrenota = this.prenotaSource.asObservable(); 

  currentImagen = this.imagenSource.asObservable();

  changeColor(color: SelectedColor) {
    this.colorSource.next(color);
  }

  changeTallaje(tallaje: string) {
    this.tallajeSource.next(tallaje);
  }

  updatePrenota(prenota: Prenota): void {
    this.prenotaSource.next(prenota);
  }

  updateImage(imagen: Imagen): void {
    this.imagenSource.next(imagen);
  }
}
