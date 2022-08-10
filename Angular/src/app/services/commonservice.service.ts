import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const TOKEN = 'TOKEN';
@Injectable({
  providedIn: 'root'
})
export class commonserviceService {
    
  constructor(private http: HttpClient) {

  }

  login(value:any): Observable<any>{
    return this.http.post<any>('https://reqres.in/api/login', {
      email: value.email,
      password: value.password
    });
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
 Logout(){
  localStorage.removeItem(TOKEN);
 }
  IsLoggedIn(){
    console.log("TOKEn :",localStorage.getItem('TOKEN'))
    return localStorage.getItem('TOKEN')!=null;

  }


  //ADD USER

  addUser(value:any): Observable<any>{
    return this.http.post<any>('https://reqres.in/api/register', {
      email: value.email,
      password: value.password
    });
  }


}