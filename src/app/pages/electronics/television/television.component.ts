import { Component, OnInit } from '@angular/core';
import { PageserviceService } from 'src/app/pageservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {
tv=[]
led={}
ledtv=""

  constructor(private    service:PageserviceService,private  route:ActivatedRoute) { }

  ngOnInit() {
    this.tv=this.service.television
    for(let tele in this.service.television){
     this.led[this.service.television[tele].name]=this.service.television[tele]
     console.log(this.led)
    }
    this.route.params.subscribe(s=>{
      if(Object.keys(s).length===0){
      this.ledtv=this.led['oneplus']['discription']
      
      }else{
        this.ledtv=this.led[s.tv]['discription']
        
      }
    })
  }

}
