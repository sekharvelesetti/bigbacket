import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/pageservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
lap={};
laptops=[];
lapto="";
  constructor(private ser:PageserviceService,private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.laptops=this.ser.laptops;
    for(let lapy in this.ser.laptops){
      this.lap[this.ser.laptops[lapy].path]=this.ser.laptops[lapy]
      // console.log(this.lap)
    
    };
    
    this.route.params.subscribe(p=> {
      if(Object.keys(p).length===0){
        this.lapto=this.lap["hp"]["discription"]
      }else{
        this.lapto=this.lap[p.sek]["discription"]
        // console.log(p)
        
      }
    })

    
  }

  add(p:any){
    if(this.ser.cart.hasOwnProperty(p.id)){
      this.ser.cart[p.id].quantity+=1
    }else{
      this.ser.cart[p.id]= p
    }
}

}
