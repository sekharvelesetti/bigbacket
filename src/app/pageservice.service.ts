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
  imgsrc15="https://rukminim1.flixcart.com/image/612/612/jvv9zm80/home-theatre-system/g/7/x/o-krisons-original-imafgzd392gjuavh.jpeg?q=70"
  imgsrc16="https://rukminim1.flixcart.com/image/312/312/k3xcdjk0/television/r/5/h/nokia-55cauhdn-original-imafmxw7qfxh6b7a.jpeg?q=70"
  imgsrc17="https://rukminim1.flixcart.com/image/312/312/jmz7csw0/computer/v/u/q/hp-na-laptop-original-imaf9zypsgmfz4zk.jpeg?q=70"
  imgsrc18="https://rukminim1.flixcart.com/image/352/352/k0y6cnk0/television/n/5/d/vu-32bfm-original-imafkmsddphzdzyh.jpeg?q=70"
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

 hometheater={
   "sony":{name:"sony",price:2000,image:this.imgsrc15,discription:"sony is the betst "},
   "samsung":{name:"samsung",price:12000,image:this.imgsrc15,discription:"samsung is the betst "},
   "xiaomi":{name:"xiaomi",price:9000,image:this.imgsrc15,discription:"xiaomi is the betst "},
   "realme":{name:"realme",price:24000,image:this.imgsrc15,discription:"realme is the betst "},
   "jbl":{name:"jbl",price:24000,image:this.imgsrc15,discription:"jbl is the betst "},
   "boat":{name:"boat",price:24000,image:this.imgsrc15,discription:"boat is the betst "}
 }

 laptops=[
   {path:"hp",price:22000,discription:"hp is best for coding",image:this.imgsrc17},
   {path:"dell",price:22000,discription:"dell is bes for coding",image:this.imgsrc17},
   {path:"mackbook",price:22000,discription:"mackbook is bst for coding",image:this.imgsrc17},
   {path:"lenovo",price:22000,discription:"lenovo is est for coding",image:this.imgsrc17},

 ]

 television=[
   {name:"oneplus",price:25000,img:this.imgsrc16,discription:"ONEPLUS NEVER SETTLE",ScreenType:"LED DIMOND"},
   {name:"micromax",price:25000,img:this.imgsrc18,discription:"MICROMAX OLD AND BEST MOBILE",ScreenType:"LED DIMOND"},
   {name:"redmi",price:25000,img:this.imgsrc16,discription:" ONE OF THE PRODUCT OF XIAOMI",ScreenType:"LED DIMOND"},
   {name:"nokia",price:25000,img:this.imgsrc18,discription:"NOKIA CONNECTING THE PEOPLE",ScreenType:"LED DIMOND"}

 ]
cart={}
  constructor() { }
}
