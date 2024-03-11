import { Component, inject } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  userLogin=new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })
  router=inject(Router)

   
  constructor(private userService:UserService){
     
  }


  onLogin(){
     
    this.userService.login(this.userLogin).subscribe((data)=>{
      console.log(data)
      console.log(JSON.stringify(data))
      localStorage.setItem("userInfos",JSON.stringify(data))
      this.router.navigateByUrl("/clients")

  },(error)=>{


    console.log(error)

  })}

   

}
