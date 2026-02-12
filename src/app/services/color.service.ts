import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Color } from '../models/color.model';

interface ColorApiResponse {
  idColor: number;
  color: string;
  TailwindColor?: string;
  tailwindColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private url = 'https://localhost:7100/api/colores';  

  constructor(private http: HttpClient) { }

  getColores(): Observable<Color[]> {
    return this.http.get<ColorApiResponse[]>(this.url).pipe(
      map((colors) =>
        colors.map((color) => ({
          idColor: color.idColor,
          color: color.color,
          tailwindColor: color.tailwindColor ?? color.TailwindColor ?? ''
        }))
      )
    );
  }

  getTailwindColorByName(colorName: string): Observable<string | undefined> {
    return this.getColores().pipe(
      map((colors) => colors.find((color) => color.color === colorName)?.tailwindColor)
    );
  }
}
