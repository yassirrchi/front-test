import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrl: './client-modal.component.css'
})
export class ClientModalComponent implements OnInit {
  @Input() showClientDetailsBox:any;
  isClientBoxOpen=true;

  @Output() isClientOpened=new EventEmitter<boolean>()
  
  toggleSidebar = (): void => {
    this.isClientBoxOpen=false
    this.isClientOpened.emit(this.isClientBoxOpen);
  };


  
  @Input() clientToShow:any;

  clientForm=new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });

ngOnInit(): void {
  this.clientForm.patchValue(this.clientToShow);
     
  }
  closeBox(){
    this.isClientBoxOpen=false
    this.isClientOpened.emit(this.isClientBoxOpen);
  }

}
