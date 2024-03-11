import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() headerText!:String;

  showSidebar:boolean=false;
  @Output() isOpened=new EventEmitter<boolean>()
  
  toggleSidebar = (): void => {
    this.showSidebar = !this.showSidebar;
    this.isOpened.emit(this.showSidebar);
  };
   


}
