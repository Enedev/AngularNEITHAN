import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(){

  }

  registry(user:any){
    console.log('Desde el servicio', user);
  }
}