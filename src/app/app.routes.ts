import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insta-pic-app';

  /*showNav = false;
  showHeader = true;

  constructor(private router:Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd) {
        this.showNav = event.url === '/home';
        this.showHeader = event.url !== '/home';
      }
    })
  }*/
}