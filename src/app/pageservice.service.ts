import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {
  imgsrc1="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/18/55c2905f-65b5-471c-8cc9-f9c3621c95461576640420744-DK_43.jpg"
 products=[
   {id:1,name:"shirts",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:2,name:"saree",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:3,name:"perfume",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:4,name:"footware",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:5,name:"assories",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:6,name:"sports",catagory:"mens",price:499,image:this.imgsrc1,quantity:1}
 ]
cart={}
  constructor() { }
}
