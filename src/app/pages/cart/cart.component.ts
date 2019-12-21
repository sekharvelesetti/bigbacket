import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/pageservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems=[]
total=0
  constructor(private service:PageserviceService) { }

  ngOnInit() {
    this.cartitems= Object.values(this.service.cart)
    this.subtotal()
  }

  subtotal(){
    this.total=0;
    for( let i=0;i<this.cartitems.length;i++){
      this.total+=this.cartitems[i].price*this.cartitems[i].quantity  
    } 
  }


  decrease(s:any){
    if(this.service.cart[s].quantity>1){
      this.service.cart[s].quantity-=1
    }else{
      delete this.service.cart[s]
    }
    
    this.cartitems= Object.values(this.service.cart)
    this.subtotal()   
  }
increase(s:any){
   this.service.cart[s].quantity+=1
   this.cartitems= Object.values(this.service.cart)
   this.subtotal()  
  }
}
