import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsermangerComponent } from './components/usermanger/usermanger.component';
import { ProductsComponent } from './components/products/products.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AuthGuard } from './services/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  {
    path: 'app',
    component: AppComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'app-sidebar',
    component: SidebarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usermanager',
    component: UsermangerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list-users',
    component: ListUsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-details',
    component: UserDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'singleproduct',
    component: SingleproductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
