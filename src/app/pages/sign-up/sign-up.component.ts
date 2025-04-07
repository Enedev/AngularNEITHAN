import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  router = inject(Router);

  fb = inject(FormBuilder);

  authService = inject(AuthService);

  registryForm = this.fb.group({
    username: ['', [Validators.min(8), Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.pattern("^[A-Za-z0-9]+$")]],
    rePassword: ['']
  });

  onRegistry(){

    //console.log(this.registryForm);
    //console.log(this.registryForm.controls.email.errors); //Muestra los errores

    if(this.registryForm.invalid){
      alert('Formulario no valido');
      return;
    }

    const {rePassword:_, ...userRegistry} = this.registryForm.value; //Obtiene lo que se ingreso en el formulario como un objeto en userRegistry

    this.authService.registry(userRegistry);
    
    this.registryForm.reset(); //Resetea el formulario
    
    //console.log(this.registryForm.controls.email.value); //Obtiene el valor del email

    //this.router.navigateByUrl('/home');
    //console.log(this.registryForm.valid)
  }
}