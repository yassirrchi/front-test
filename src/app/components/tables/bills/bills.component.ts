import { Component, OnInit } from '@angular/core';
import { BillsService } from '../../../service/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit {
  bills:any=[]
  selectedClient!:any;
  showClientDetails=false;
   
  constructor(private billService:BillsService){

  }
  ngOnInit(): void {
    this.billService.getAllBills().subscribe((data)=>{
      this.bills=data
       

    },(error)=>{

      console.log(error)
    })
  }
  selectClient(selectedBillClient:any){
    
     
    this.selectClient=selectedBillClient
    this.showClientDetails=true;
    

  }
  ClientBoxHandler(isOpened:boolean){
     
    this.showClientDetails=isOpened

  }





}
