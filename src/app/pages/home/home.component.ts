import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/pageservice.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ser:PageserviceService) { }

  items(){
    return this.ser.products
  }

  
  ngOnInit() {
  }

 add(p:any){
   if(this.ser.cart.hasOwnProperty(p.id)){
     this.ser.cart[p.id].quantity+=1
   }else{
     this.ser.cart[p.id]=p
   }
   
console.log(this.ser.cart)
 }

}