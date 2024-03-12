import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
   users:any= []
   connectedUser:any

   constructor(private userService:UserService){}

  ngOnInit(): void {






    this.userService.getAllUsers().subscribe((data)=>{
      this.users=data
       

    },(error)=>{

      console.log(error)
    })

    let storedUserData: any;

    const localData: string | null = localStorage.getItem("userInfos");
    
    if (localData !== null) {
      storedUserData = JSON.parse(localData);
      this.connectedUser=storedUserData.email
    } else {
      // redirct to login
    }
    console.log(storedUserData)
    


     
    
  }

 


}
