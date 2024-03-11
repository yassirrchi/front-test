import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  getAllClients():Observable<any>{

    return this.http.get<any>("http://localhost:4500/all-clients")

  }
  createClient(clientForm: FormGroup):Observable<any>{
    const client = {
      id: clientForm.value.id,
      firstName:  clientForm.value.firstName,
      lastName:  clientForm.value.lastName,
      email: clientForm.value.email,
      address: clientForm.value.address,
      phoneNumber: clientForm.value.phoneNumber
    };
    return this.http.post<any>("http://localhost:4500/client/create",client)
  }
  updateClient(clientForm: FormGroup):Observable<any>{
    const client = {
      id: clientForm.value.id,
      firstName:  clientForm.value.firstName,
      lastName:  clientForm.value.lastName,
      email: clientForm.value.email,
      address: clientForm.value.address,
      phoneNumber: clientForm.value.phoneNumber
    };

    return this.http.put<any>("http://localhost:4500/client/update",client)
  }
  getClientById(id:number):Observable<any>{
    
    return this.http.get<any>("http://localhost:4500/client/"+id)
  }

  
}
