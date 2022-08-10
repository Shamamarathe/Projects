import { Component, OnInit } from '@angular/core';
import { userapiService } from '../../services/userapi.service';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  product: any = [];
  rating: number;
  constructor(private service: userapiService) {
    // this.rating = 0;
    this.rating = 3;


  }
  ngOnInit() {
    this.getproduct();
  }
  updateRating(star: number) {
    this.rating = Math.round(star);
    console.log("rating : ",this.rating)
  }

  getproduct() {
    this.service.getSingleProduct().then((data) => {
      this.product = data;
      console.log("single:",this.product.image)
      
    });
  }

}
