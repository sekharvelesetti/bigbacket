import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/pageservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  constructor(private s:PageserviceService) { }
  items(){
    return this.s.mobiles
  }

  ngOnInit() {
  }

  add(z:any){
    if(this.s.cart.hasOwnProperty(z.id)){
    this.s.cart[z.id].quantity+=1
  }else{
  this.s.cart[z.id]=z
  
  }
  
  }
}
