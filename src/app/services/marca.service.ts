import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/models/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url = 'https://localhost:7100/api/marcas';

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.url);
  }
}
