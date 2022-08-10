import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';

import { UsermangerComponent } from './components/usermanger/usermanger.component';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { userapiService } from './services/userapi.service';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MapComponent } from './components/map/map.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    AddUserComponent,
    UserDetailsComponent,
    ProductsComponent,
    PageNotFoundComponent,
    UsermangerComponent,
    MapComponent,
    SidebarComponent,
    SingleproductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    LeafletModule,
    NgxPaginationModule,
    NgxStarRatingModule,
    MatDialogModule,
  


    
  ],
  providers: [userapiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
