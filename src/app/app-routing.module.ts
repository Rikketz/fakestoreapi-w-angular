import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },{
    path: 'products/:id',
    component: ProductDetailComponent
  },{
    path: 'add-product',
    component: ProductEditComponent
  },{
    path: 'users/:id',
    component: UserDetailComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'register',
    component: RegisterComponent
  },{
    path: '',
    component: HomePageComponent
  },{
    path: '*',
    redirectTo: '/',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
