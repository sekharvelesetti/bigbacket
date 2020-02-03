import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 Login =new FormGroup({
   user : new FormControl('',[Validators.required]),
   password : new FormControl('',[Validators.required])
 })
 
  constructor(private route:Router) { }
  profile={name:"sekhar",password:"123456"}
  profile1={name:"s",password:"1"}
  alert="fill the field first"
  ngOnInit() {
  }

  onSubmit(p:any){
    if(this.profile.name!==this.Login.value.user){
      alert("give the valid email address")
    }else if(this.profile.password!==this.Login.value.password){
      alert("give the valid password")
    }else{
      this.route.navigate(['/mobiles'])
    }
  }
}
