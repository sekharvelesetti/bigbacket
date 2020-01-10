import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/pageservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hometheater',
  templateUrl: './hometheater.component.html',
  styleUrls: ['./hometheater.component.css']
})
export class HometheaterComponent implements OnInit {
theater=[]
items=""
item=""
  constructor(private ser:PageserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.theater=Object.values(this.ser.hometheater)
     this.route.params.subscribe(y =>{
       if(Object.keys(y).length===0){
     this.items=this.ser.hometheater['sony']['discription']
      this.item=this.ser.hometheater['sony']['ScreenType']


       }else{
         this.items=this.ser.hometheater[y.name]['discription']
          this.item=this.ser.hometheater[y.name]['ScreenType']


       }
     })
     console.log(this.items)
  }

}
