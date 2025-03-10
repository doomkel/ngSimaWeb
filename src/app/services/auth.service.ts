import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<Token> {
    const usuario: Usuario = { CodUsuario: 0, Usuario: username, Clave: password, TiendaBase: '0', Perfil: 0 };
    return this.httpClient.post<Token>('https://localhost:7100/api/Token', usuario).pipe(
      tap((response) => {
        console.log('HTTP response:', response); // Log the response
        localStorage.setItem('token', response.token);
        // this.router.navigate(['/inicio']);
      }),
      catchError((error) => {
        console.error('HTTP error:', error); // Log the error
        return throwError(error);
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    console.log(token);

    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;

    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}


