import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  router=inject(Router)
  isLoginPage:any;
   storedUserData:any
   role:any
   
  constructor(private route: ActivatedRoute) {

    this.isLoginPage=this.router.url
    let storedUserData:any
  const localData=localStorage.getItem("userInfos")
  if(localData!=null){
    storedUserData=JSON.parse(localData)
    console.log("------")
     console.log(storedUserData)
     console.log("-------")

  
  }
  }

  ngOnInit() {
    
  const localData=localStorage.getItem("userInfos")
   

  if(localData!=null){
    this.storedUserData=JSON.parse(localData)

  
  }
  console.log(this.storedUserData)
  this.role=this.storedUserData.role
    
     
     
  }
  

  navigate(path:string){

    
    this.isLoginPage=path
    this.router.navigateByUrl(path)
     
    


  }

   

}
