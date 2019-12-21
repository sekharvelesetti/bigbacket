import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { AssociersComponent } from './pages/associers/associers.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"clothes",component:ClothesComponent},
  {path:"electronics",component:ElectronicsComponent},
  {path:"Mobiles",component:MobilesComponent},
  {path:"Associers",component:AssociersComponent},
  {path:"cart",component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
