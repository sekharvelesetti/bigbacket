import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/pageservice.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  items(){
    return this.ser.products
  }
  constructor(private ser:PageserviceService) { }

  ngOnInit() {
  }
  add(p:any){
    if(this.ser.cart.hasOwnProperty(p.id)){
      this.ser.cart[p.id].quantity+=1
    }else{
      this.ser.cart[p.id]=p
    }
}
}