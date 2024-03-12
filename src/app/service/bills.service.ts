import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http:HttpClient) { }
  getAllBills():Observable<any>{

    return this.http.get<any>("http://localhost:4500/all-bills")

  }

}
