import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prenota } from 'src/app/models/prenota.model'


@Injectable({
  providedIn: 'root'
})
export class PrenotaService {

  private url = "https://localhost:7100/api/prenotas";

  private urlId = "https://localhost:7100/api/prenotas/nextid";

  private urlSave = "https://localhost:7100/api/prenotas";

  constructor(private http: HttpClient) { }

  getPrenotas(): Observable<Prenota[]> {
    return this.http.get<any>(this.url).pipe(
      map((res: any) => {
        const list: any[] = Array.isArray(res)
          ? res
          : Array.isArray(res?.items)
          ? res.items
          : Array.isArray(res?.value)
          ? res.value
          : Array.isArray(res?.results)
          ? res.results
          : Array.isArray(res?.data)
          ? res.data
          : [];

        // Normalize property casing to match Prenota model
        return list.map((x: any) => ({
          Id: x.Id ?? x.id ?? 0,
          Fecha: x.Fecha ?? x.fecha ?? '',
          Cajas: String(x.Cajas ?? x.cajas ?? ''),
          Estilo: x.Estilo ?? x.estilo ?? '',
          Estilo2: x.Estilo2 ?? x.estilo2 ?? '',
          Marca: x.Marca ?? x.marca ?? 0,
          Familia: x.Familia ?? x.familia ?? 0,
          Subfamilia: x.Subfamilia ?? x.subfamilia ?? 0,
          Tallaje: x.Tallaje ?? x.tallaje ?? '',
          Descrip: x.Descrip ?? x.descrip ?? '',
          Status: x.Status ?? x.status ?? ''
        })) as Prenota[];
      })
    );
  }

  getNextId(): Observable<number> {
    return this.http.get<number>(this.urlId);
  }

  createPrenota(prenota: Prenota): Observable<Prenota> {
    return this.http.post<Prenota>(this.urlSave, prenota);
  }

}
