import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  postLoginMessage: string = '';

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  logoutUser = () => {
    console.log('logoutUser');
    const response = confirm('Are you sure to logout?');
    if (response) {
      this.userService.logout();
      this.authService.logout();
      this.postLoginMessage = 'You have successfully logged out; redirecting to login...'
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
    }
    else {
      setTimeout(() => {
        this.postLoginMessage = 'Logout cancelled; going back...';
        this.router.navigate(['.']);
      }, 1000);
    }
  };
}
