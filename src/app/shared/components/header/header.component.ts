import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  authService = inject(AuthService);
  router = inject(Router);

  isLoggedUser = this.authService.isSignedUser;

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}