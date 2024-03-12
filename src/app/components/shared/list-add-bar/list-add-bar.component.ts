import { Component, Inject, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-add-bar',
  templateUrl: './list-add-bar.component.html',
  styleUrl: './list-add-bar.component.css'
})
export class ListAddBarComponent implements OnInit {
  router=inject(Router);
  addPath=""
  listPath=""
  storedUserData:any;
  role:any

  ngOnInit(): void {

  this.addPath=`/${this.router.url.split("/")[1]}/handle/0`
  this.listPath=`/${this.router.url.split("/")[1]}`
  const localData=localStorage.getItem("userInfos")
   

  if(localData!=null){
    this.storedUserData=JSON.parse(localData)

  
  }
  console.log(this.storedUserData)
  this.role=this.storedUserData.role

   

  }

 

  

  addButton(){
    this.router.navigateByUrl(this.addPath)


  }
  listButton(){
    this.router.navigateByUrl(this.listPath)

  }

}
