import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubFamilia } from '../models/subfamilia.model';
import { Familia } from '../models/familia.model';

@Injectable({
  providedIn: 'root'
})
export class SubfamiliaService {
 
  private url = 'https://localhost:7100/api/subfamilias/getbyfamilia';



  constructor(private http: HttpClient) { }

  getSubfamilias(familia: Familia): Observable<SubFamilia[]> {    
    return this.http.post<SubFamilia[]>(this.url, familia);
  }
}