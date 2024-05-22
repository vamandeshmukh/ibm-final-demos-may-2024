import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData = { username: '', password: '' };

  postRegisterMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  submitRegister(registerForm: any) {
    if (registerForm.valid) {
      console.log(registerForm.value);  // Access form data using registerForm.value
      this.userService.register(registerForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.postRegisterMessage = `Hi ${response.username}! You've registered successfully. Please login now.`;
            this.registerData = { username: '', password: '' };
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000);
          },
          error: (error) => {
            console.log(error);
            if (error.status === 400) {
              this.postRegisterMessage = 'Username already exists!';
            } else {
              this.postRegisterMessage = error.statusText;
            }
            this.registerData = { username: '', password: '' };
          }
        });
    }
  }
}


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

//   registerData = { username: '', password: '' };
//   postRegisterMessage: string = '';

//   constructor(private userService: UserService) { };

//   submitRegister = () => {
//     console.log(this.registerData);
//     this.userService.register(this.registerData)
//       .subscribe({
//         next: (response) => {
//           console.log(response);
//           this.postRegisterMessage = `Hi ${response.username}! You've logged in successfully.`;
//           this.registerData = { username: '', password: '' };
//         },
//         error: (error) => {
//           console.log(error);
//           if (error.status === 400)
//             this.postRegisterMessage = 'Username alredy exists!';
//           else
//             this.postRegisterMessage = error.statusText;
//           this.registerData = { username: '', password: '' };
//         }
//       });
//   }
// }


