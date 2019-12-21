import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { AssociersComponent } from './pages/associers/associers.component';
import { CatageriosComponent } from './pages/catagerios/catagerios.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    PagesComponent,
    HomeComponent,
    AboutComponent,
    ClothesComponent,
    ElectronicsComponent,
    MobilesComponent,
    AssociersComponent,
    CatageriosComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
