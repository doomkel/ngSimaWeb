import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen.model';


@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private url = 'https://localhost:7100/api/imagenes/GetByEstilo';
  private urlPost =  'https://localhost:7100/api/imagenes';

  constructor(private http: HttpClient) { }

  getImagen(imagen: Imagen): Observable<Imagen> {
    return this.http.post<Imagen>(this.url, imagen);
  }
  
  saveImagen(imagen: Imagen): Observable<Imagen> {
    const formData = new FormData();
    formData.append('id', imagen.id.toString());
    formData.append('Estilo', imagen.Estilo);

    // Create a Blob only if we have image data
    const hasImage = imagen.Imagen && (imagen.Imagen.byteLength ?? 0) > 0;
    if (hasImage) {
      const imagenBlob = new Blob([imagen.Imagen], { type: 'application/octet-stream' });
      // Provide a filename so ASP.NET Core binds it as an IFormFile
      formData.append('Imagen', imagenBlob, `${imagen.Estilo || 'imagen'}.bin`);
    }

    return this.http.post<Imagen>(this.urlPost, formData);
  }
}
