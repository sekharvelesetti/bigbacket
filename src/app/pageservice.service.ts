import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {
  imgsrc1="assets/images/men shirts.jpg";
  imgsrc2="assets/images/femaledress.jpg";
  imgsrc3="assets/images/assories.jpg";
  imgsrc4="assets/images/footware.jpg";
  imgsrc5="assets/images/sports.jpg";
  imgsrc6="assets/images/perfume.jpg";
  imgsrc7="https://rukminim1.flixcart.com/image/312/312/k41mp3k0/mobile/7/h/g/realme-x2-rmx1992-original-imafnfe8kahx3kyz.jpeg?q=70"
  imgsrc8="https://rukminim1.flixcart.com/image/312/312/jxz0brk0/mobile/m/6/z/redmi-k20-pro-na-original-imafgb4yzvmbfewa.jpeg?q=70"
  imgsrc9="https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/u/n/j/z1pro-64-d-1951-pd1911f-ex-vivo-6-original-imafhmyaytjannkv.jpeg?q=70"
  imgsrc10="https://rukminim1.flixcart.com/image/312/312/j51cbrk0/mobile/7/z/g/nokia-6-na-original-imaevtennngg6yht.jpeg?q=70"
  imgsrc11="https://rukminim1.flixcart.com/image/312/312/k01b8280pkrrdj/mobile-refurbished/8/w/n/f11-pro-128-d-cph1969-oppo-6-original-imafec8hzfzyg79e.jpeg?q=70"
  imgsrc12="https://rukminim1.flixcart.com/image/312/312/k12go7k0/mobile/7/e/e/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpeg?q=70"
  imgsrc13="https://rukminim1.flixcart.com/image/312/312/jeiukcw0/mobile/9/y/y/samsung-galaxy-s9-plus-sm-g965fzkdins-original-imaf372g5zukw8wr.jpeg?q=70"
  imgsrc14="https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/9/b/e/one-action-128-b-pafy0002in-motorola-4-original-imafjeba94knawvz.jpeg?q=70"
 products=[
   {id:1,name:"shirts",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:2,name:"saree",catagory:"women",price:499,image:this.imgsrc2,quantity:1},
   {id:3,name:"assories",catagory:"mens",price:499,image:this.imgsrc3,quantity:1},
   {id:4,name:"footware",catagory:"mens",price:499,image:this.imgsrc4,quantity:1},
   {id:5,name:"assories",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:6,name:"sports",catagory:"mens",price:499,image:this.imgsrc5,quantity:1},
   {id:7,name:"shirts",catagory:"mens",price:499,image:this.imgsrc1,quantity:1},
   {id:8,name:"footware",catagory:"mens",price:499,image:this.imgsrc4,quantity:1}
 ]

 mobiles=[
  {id:9,name:"realme X2",catagory:"mobiles",price:17999,image:this.imgsrc7,quantity:1},
  {id:10,name:"Xiaomi K20 pro",catagory:"mobiles",price:16999,image:this.imgsrc8,quantity:1},
  {id:11,name:"Nokia 6",catagory:"mobiles",price:11499,image:this.imgsrc10,quantity:1},
  {id:12,name:"Vivo",catagory:"mobiles",price:13999,image:this.imgsrc9,quantity:1},
  {id:13,name:"Oppo",catagory:"mobiles",price:12999,image:this.imgsrc11,quantity:1},
  {id:14,name:"I phone",catagory:"mobiles",price:111499,image:this.imgsrc12,quantity:1},
  {id:15,name:"Samsung",catagory:"mobiles",price:8999,image:this.imgsrc13,quantity:1},
  {id:16,name:"Motrola",catagory:"mobiles",price:9999,image:this.imgsrc14,quantity:1}
 ]
cart={}
  constructor() { }
}
