import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private authservice: AuthService
    ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required]
    })
  }

  signUp(form: any) {
    // console.log(form);
    this.authservice.registerUser(form).subscribe(
      res => {
        console.log("Registered successfully!", res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
