import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  router=inject(Router)
  isLoginPage:any;
  constructor(private route: ActivatedRoute) {
    this.isLoginPage=this.router.url
  }

  navigate(path:string){
    this.isLoginPage=this.router.url

    this.router.navigateByUrl(path)
     
    


  }

   

}
