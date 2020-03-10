import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PageserviceService } from 'src/app/pageservice.service';

@Component({
  selector: 'app-associers',
  templateUrl: './associers.component.html',
  styleUrls: ['./associers.component.css']
})
export class AssociersComponent implements OnInit {
  post:any
  constructor(private ser:PageserviceService) { }

  ngOnInit() {
    this.ser.getalbums().subscribe(response =>{this.post = response})
  }


}
