import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prenota } from 'src/app/models/prenota.model'


@Injectable({
  providedIn: 'root'
})
export class PrenotaService {

  private url = "https://localhost:7100/api/prenotas";

  private urlId = "https://localhost:7100/api/prenotas/nextid";

  constructor(private http: HttpClient) { }

  getPrenotas(): Observable<Prenota[]> {
    return this.http.get<Prenota[]>(this.url);
  }

  getNextId(): Observable<number> {
    return this.http.get<number>(this.urlId);
  }

}
