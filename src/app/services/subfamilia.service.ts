import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubFamilia } from '../models/subfamilia.model';

@Injectable({
  providedIn: 'root'
})
export class SubfamiliaService {

  private url = 'https://localhost:7100/api/subfamilias';

  constructor(private http: HttpClient) { }

  getSubfamilias(): Observable<SubFamilia[]> {
    return this.http.get<SubFamilia[]>(this.url);
  }
}