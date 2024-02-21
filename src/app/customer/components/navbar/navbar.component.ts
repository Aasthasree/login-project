//Angular Imports
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//Service
import { AuthService } from 'src/app/login/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
  ) { }

  onClickLogout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.toastrService.success('Logout successful', 'Success');
      },
      error: (error) => {
        console.error('Logout error:', error);
      }
    });
  }

}