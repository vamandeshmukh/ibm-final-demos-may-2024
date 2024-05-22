import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  postLoginMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.userService.login(loginData)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.userService.setProfile(response.user); // save data to profile 
            this.authService.login(response.token);
            this.postLoginMessage = `Hi ${response.user.username}! You've logged in successfully. Showing your profile....`;
            this.loginForm.reset();
            setTimeout(() => {
              this.router.navigate(['/profile']);
            }, 2000);
          },
          error: (error) => {
            console.log(error);
            this.postLoginMessage = error.statusText;
            this.loginForm.reset();
          }
        });
    } else {
      console.warn('Form is invalid');
    }
  }
}


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

//   loginData = { username: '', password: '' };
//   postLoginMessage: string = '';

//   constructor(private userService: UserService) { };

//   submitLogin = () => {
//     console.log(this.loginData);
//     this.userService.login(this.loginData)
//       .subscribe({
//         next: (response) => {
//           console.log(response);
//           this.postLoginMessage = `Hi ${response.user.username}! You've logged in successfully.`;
//           this.loginData = { username: '', password: '' };
//         },
//         error: (error) => {
//           console.log(error);
//           this.postLoginMessage = error;
//           this.loginData = { username: '', password: '' };
//         }
//       });
//   }
// }






