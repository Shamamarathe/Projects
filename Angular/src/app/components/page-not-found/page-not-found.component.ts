import { Component, OnInit } from '@angular/core';
import { userapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  pagenotfound:any = [];
  constructor( private service: userapiService) { }

  ngOnInit() {
   // this.getpagenotfound()
  }
//   getpagenotfound(){
//     this.service.getpagenotfound().then((response) => {
//       this.pagenotfound = response.data;
// console.log(this.pagenotfound);

//     });
//  }
}
