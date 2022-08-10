import { Component, ViewChild, OnInit  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { commonserviceService } from 'src/app/services/commonservice.service';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router, private service:commonserviceService) {}

  currentUser: any;
  ngOnInit() {
    this.checkLogin();
    this.service.IsLoggedIn()
  }
  checkLogin(){
     this.currentUser =this.service.isLogged();
  }
  // constructor(
  //     private router: Router,
  //     private authenticationService: AuthenticationService
  // ) {
  //     this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  // }

  logout() {
      this.service.Logout();
      this.router.navigate(['/login']);
  }
}
