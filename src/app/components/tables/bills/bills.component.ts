import { Component, OnInit } from '@angular/core';
import { BillsService } from '../../../service/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit {
  bills:any=[]
  constructor(private billService:BillsService){

  }
  ngOnInit(): void {
    this.billService.getAllBills().subscribe((data)=>{
      this.bills=data
       

    },(error)=>{

      console.log(error)
    })
  }




}
