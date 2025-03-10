import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Familia } from '../models/familia.model';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  private url = 'https://localhost:7100/api/familias';

  constructor(private http: HttpClient) { }

  getFamilias(): Observable<Familia[]> {
    return this.http.get<Familia[]>(this.url);
  }
}