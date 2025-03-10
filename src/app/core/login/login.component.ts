import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService ,private router: Router) { }

  onLogin() : void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/inicio']),
      error: () => alert('Credenciales incorrectas')  
    });
  }  

}
