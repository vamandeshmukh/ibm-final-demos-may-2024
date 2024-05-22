import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {

  profileData: any;
  editProForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

    this.userService.getProfile()
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          this.profileData = resp;
          console.log(this.profileData);
        },
        error: (err: any) => {
          console.error(err);
        }
      });

    this.editProForm = fb.group({
      _id: [this.profileData?._id,],
      username: [this.profileData?.username, Validators.required],
      password: [this.profileData?.password],
      firstName: [this.profileData?.firstName, Validators.required],
      lastName: [this.profileData?.lastName, Validators.required],
      email: [this.profileData?.email, Validators.required],
      phone: [this.profileData?.phone, Validators.required],
      avatar: [this.profileData?.avatar, Validators.required],
    });

  }

  submitEditPro() {
    if (this.editProForm.valid) {
      console.log(this.editProForm.value);
      this.userService.updateProfile(this.editProForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.userService.setProfile(response); // save data to profile 
            this.editProForm.reset();
            setTimeout(() => {
              this.router.navigate(['/profile']);
            }, 2000);
          },
          error: (error) => {
            console.error(error);
            this.editProForm.reset();
          }
        });
    } else {
      console.warn('Form is invalid');
    }
  }

  ngOnInit() {
    console.log('initilized');
  };

}


