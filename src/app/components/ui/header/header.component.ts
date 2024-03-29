import { EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  @Input() headerText!:String;
  isLogin:any;
  @Input() isSideBarOpened:any;
  router=inject(Router)

   

  showSidebar:boolean=false;
  @Output() isOpened=new EventEmitter<boolean>()
  
  toggleSidebar = (): void => {
    this.showSidebar = !this.showSidebar;
    this.isOpened.emit(this.showSidebar);
  };
  
   


}
