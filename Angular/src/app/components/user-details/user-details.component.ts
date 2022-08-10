import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient }    from '@angular/common/http';
import { userapiService } from "../../services/userapi.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails:any = [];
  constructor( private service: userapiService) {
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.service.getSingleUser().then((response) => {
      this.userDetails = response.data;

      console.log('details',this.userDetails)

    });
  }

 
}




