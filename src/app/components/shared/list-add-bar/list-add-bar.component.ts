import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-add-bar',
  templateUrl: './list-add-bar.component.html',
  styleUrl: './list-add-bar.component.css'
})
export class ListAddBarComponent {
  router=inject(Router)

  addButton(){
    this.router.navigateByUrl("/clients/handle/0")


  }
  listButton(){
    this.router.navigateByUrl("/clients")

  }

}
