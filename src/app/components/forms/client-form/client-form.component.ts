import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../service/client.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit {
  clientId!:any;
  clientToUpdate:any;
  router=inject(Router)

  
  clientForm=new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor(private route:ActivatedRoute,private clientService:ClientService){

  }
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.clientId = params['id'];
    });

    if(this.clientId!=0){
      this.clientService.getClientById(this.clientId).subscribe((data)=>{
        this.clientToUpdate=data
        this.clientForm.patchValue(this.clientToUpdate);
  
      },(error)=>{
  
        console.log(error)
      })


    }
 

  }
  clientSubmit(){
    if(this.clientId!=0){
      //update instructions
      this.clientService.updateClient(this.clientForm).subscribe((data)=>{
        this.router.navigateByUrl("/clients")     
  
      },(error)=>{
  
        console.log(error)
      })
    }
    else{
      //create instructions
      this.clientService.createClient(this.clientForm).subscribe((data)=>{
        this.router.navigateByUrl("/clients")     
  
      },(error)=>{
  
        console.log(error)
      })
    }

    }

  }
   
  


