import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private url = 'https://localhost:7100/api/colores';  

  constructor(private http: HttpClient) { }

  getColores(): Observable<Color[]> {
    return this.http.get<Color[]>(this.url);
  }
}
