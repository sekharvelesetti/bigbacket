import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { AssociersComponent } from './pages/associers/associers.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HometheaterComponent } from './pages/electronics/hometheater/hometheater.component';
import { LaptopsComponent } from './pages/electronics/laptops/laptops.component';
import { TelevisionComponent } from './pages/electronics/television/television.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"clothes",component:ClothesComponent},
  {path:"electronics",component:ElectronicsComponent,children:
  [  {path:"",redirectTo:"hometheater",pathMatch:"full"},
     {path:"hometheater/:name",component:HometheaterComponent},
    {path:"hometheater",component:HometheaterComponent},
    {path:"laptops",component:LaptopsComponent},
   {path:"laptops/:sek",component:LaptopsComponent},
   {path:"television/:tv",component:TelevisionComponent},
   {path:"television",component:TelevisionComponent},
   ]},
  
  {path:"mobiles",component:MobilesComponent},
  {path:"Associers",component:AssociersComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
