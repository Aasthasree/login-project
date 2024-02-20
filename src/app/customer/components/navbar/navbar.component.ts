import { Component } from '@angular/core';
//Service
import { AuthService } from 'src/app/login/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private authService: AuthService
  ) { }

  onClickLogout() {
    this.authService.logout().subscribe();
  }
}
