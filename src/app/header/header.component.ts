import { Component, OnInit } from '@angular/core';
import { PageserviceService } from '../pageservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cart=[]
quantity=0
  constructor(private ser:PageserviceService) { }

  ngOnInit() {
    this.cart=Object.values(this.ser.cart)
    this.quantity1()
   
    
  }
  quantity1(){
    this.quantity=0
    for (let i = 0; i < this.cart.length; i++) {
      this.quantity+=(this.cart[i].quantity+0)
      this.cart=Object.values(this.ser.cart)
       
      // console.log(this.ser.cart)
      console.log(this.quantity)

    }
  }

}
