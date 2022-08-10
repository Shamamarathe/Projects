

import { Component,OnInit, ViewChild } from '@angular/core';
import { userapiService } from '../../services/userapi.service';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';


 @Component({
  selector: 'app-usermanger',
  templateUrl: './usermanger.component.html',
  styleUrls: ['./usermanger.component.scss']
})
export class UsermangerComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'city',
    'zipcode',
    'geo'

   
  ];
  
  dataSource: any[] = [];

  constructor(private service: userapiService,private matDialog: MatDialog) {}

  ngOnInit() {
    this.getData();

  }

  getData() {
    this.service.getData().then((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }
  openModal(geo:object) {
    console.log("Address",geo)
    this.matDialog.open(MapComponent, {
      height: '500px',
      width: '700px',
      "data": geo,
      "autoFocus": false
    });
  }
 
  
}
