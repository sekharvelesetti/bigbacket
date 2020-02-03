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
quantity=0
delivary=0






  constructor(private service:PageserviceService) { }

  ngOnInit() {
    this.cartitems= Object.values(this.service.cart)
    this.subtotal()
    this.quanti()
    this.update()
 
  }
  

  subtotal(){
    this.total=0;
    for( let i=0;i<this.cartitems.length;i++){
      this.total+=this.cartitems[i].price*this.cartitems[i].quantity 
      this.quanti() 
    } 
  }

quanti(){
  this.quantity=0
  for(let i=0;i<this.cartitems.length;i++){
   this.quantity+=this.cartitems[i].quantity+0
   this.cartitems= Object.values(this.service.cart)
  
  }
}
  
update(){
  this.delivary=0
  if(this.total<10000){
    this.delivary=0
  }else if(this.total<20000){
    this.delivary=20
  }else{
    this.delivary=40
  }
  
}

remove(p){
  if(delete this.service.cart[p.id]){
alert("arr you sure")
this.cartitems= Object.values(this.service.cart)
    this.subtotal()   
    this.update()
    this.quanti()


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
    this.update()
    this.quanti()
  }
increase(s:any){
   this.service.cart[s].quantity+=1
   this.cartitems= Object.values(this.service.cart)
   this.subtotal()
   this.update() 
   this.quanti() 
  }
}
