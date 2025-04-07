import { Component, inject, OnDestroy, OnInit, DoCheck  } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy, DoCheck {

  seguidores: number = 5;
  seguidoresAnteriores: number = 5;
  authService;
  username = 'Bienvenido';
  publicaciones = 0;

  constructor(authService:AuthService){
    this.authService = authService;
    console.log('Este es el constructor');
  }
  
  ngOnInit(): void {
    console.log('Este es OnInit');
    const user = this.authService.getUser();
    this.username = user? user.name!:'Bienvenido';
  }

  ngDoCheck(): void {
    if (this.seguidores !== this.seguidoresAnteriores) {
      console.log(`¡Nuevo seguidor! Ahora tienes ${this.seguidores} seguidores.`);
      this.seguidoresAnteriores = this.seguidores;
    }
  }

  subirSeguidor(): void {
    this.seguidores++;
  }

  ngOnDestroy(): void {
    console.log('Este es OnDestroy');

  }
}