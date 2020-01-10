import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 get password(){
   return this.registrationForm.get('password')
 }
 get username(){
   return this.registrationForm.get('username')
 }
 get confirmpassword(){
   return this.registrationForm.get('confirmpasword')
 }

  constructor(private fb:FormBuilder) { }
registrationForm=this.fb.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]],
  confirmpassword:['',[Validators.required]],
  address:this.fb.group({
    city:[''],
    state:[''],
    postalcode:['']
  })

})

  ngOnInit() {
  }
  
  
  
}
