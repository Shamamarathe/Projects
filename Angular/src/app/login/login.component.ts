import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {commonserviceService} from '../services/commonservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder, private api:commonserviceService, private router: Router) {
  }

  ngOnInit() {
    this.IsLoggedIn();
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  IsLoggedIn(){
   if(this.api.IsLoggedIn()){
    this.router.navigateByUrl('usermanager');
   }
  }
  


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }
 

  onSubmit() {
    console.log(this.loginForm.value);
    this.api.login(
      this.loginForm.value).subscribe(
        result => {
          console.log(result);
          this.api.setToken(result.token);
          this.router.navigateByUrl('usermanager');
        },
        r => {
          alert(r.error.error);
        });
  }
}