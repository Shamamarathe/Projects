import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';


@Injectable()
export class userapiService {

  constructor(private http: HttpClient) { }

  getData() : Promise<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users').
    toPromise();

  }

  
  getSingleUser() : Promise<any>{
    return this.http.get('https://reqres.in/api/users/2').toPromise();

  }

  getProductList() : Promise<any>{
    console.log("me called");
    return this.http.get('https://fakestoreapi.com/products?limit=4').
    toPromise();

  }

  getSingleProduct() : Promise<any>{
    console.log("product called");
    return this.http.get('https://fakestoreapi.com/products/2').
    toPromise();

  }
  getpagenotfound() : Promise<any>{
    return this.http.get('https://reqres.in/api/unknown/23').
    toPromise();

  }

}