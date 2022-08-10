import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { commonserviceService } from 'src/app/services/commonservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  hide: boolean = false;
  userSavedStaus:boolean = false;
  userSavedId:Number = 0;
  constructor(private fb: FormBuilder, private api:commonserviceService, private router: Router) {
  }

  ngOnInit() {
  }

  addUserForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  


  onLogin() {
    if (!this.addUserForm.valid) {
      return;
    }
    console.log(this.addUserForm.value);
  }
 

  onSubmit() {
    console.log(this.addUserForm.value);
    this.api.addUser(
      this.addUserForm.value).subscribe(
        result => {
          console.log('adduser result',result);
          this.userSavedStaus = true;
          this.userSavedId = result.id;
          //this.api.setToken(result.token);
          //this.router.navigateByUrl('dashboard');
        },
        result => {
          alert(result.error.error);
        });
  }

}
