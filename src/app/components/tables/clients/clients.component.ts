import { Component, Inject, OnInit, inject } from '@angular/core';
import { ClientService } from '../../../service/client.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
  clients!:any;
  router=inject(Router)
  


  constructor(private clientServices:ClientService){

  }

  ngOnInit(): void {
    
    this.clientServices.getAllClients().subscribe((data)=>{
      this.clients=data
       

    },(error)=>{

      console.log(error)
    })
     
  }
  editClient(id:number){
     
    this.router.navigateByUrl("/clients/handle/"+id)
  }

     
  }
  


