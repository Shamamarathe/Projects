
import { Component, OnInit } from '@angular/core';
import { userapiService } from '../../services/userapi.service';
import { NgxStarRatingModule } from 'ngx-star-rating';



/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  displayedColumns: string[] = [
    'category',
    'title',
    'price',
    'description',
    'rate'
  ];
  p: number = 1;
 productList: any[] = [];
 rating: number;

  constructor(private service: userapiService) {

    // this.rating = 0;
    this.rating = 3;

  }
  ngOnInit() {
    this.getproducts();

  }
  updateRating(star: number) {
    this.rating = Math.round(star);
    console.log("rating : ",this.rating)
  }


  getproducts() {
    console.log("calling me");
    this.service.getProductList().then((data) => {
      this.productList = data;
      // this.getdiscountedprice(this.productList);
      console.log("productList:",this.productList)

    });
  }

  // getdiscountedprice(products:any)
  // {
  //   let produt:any;
  //   products.map((product) => {product.price}) ;

   
  // }

  //latest added
  
  public stars: boolean[] = Array(5).fill(true);

  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
}

// createFn(num: number) {

//   let arr = [];

//   for (let i = 1; i <= 5; i++) {

//     if (1 > num && 0 < num) {

//       arr.push(0.5);

//       num -= num;

//     } else if (num < 1) {

//       arr.push(0);

//       num -= 0;

//     } else {

//       arr.push(1);

//       num -= 1;

//     }

//   }

//   return arr;

// }

}
