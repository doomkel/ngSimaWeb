import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase } from '../models/clase.model';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  private url = 'https://localhost:7100/api/clases';

  constructor(private http: HttpClient) { }

  getClases(): Observable<Clase[]> {
    return this.http.get<Clase[]>(this.url);
  }
}