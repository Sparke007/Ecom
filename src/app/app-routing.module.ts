import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutComponent } from './about/about.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:LoginComponent,
    path:"login"
    
  },
  {
    component:WishlistComponent,
    path:"wishlis"

  },
  {
    component:ContactComponent,
    path:"contact"
  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:AddtocartComponent,
    path:"addtocart"
  },
  {
    component:CheckoutComponent,
    path:"checkout"
  }

  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
