import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  login(userLogin: FormGroup):Observable<any>{
    const credentials={
      email:userLogin.value.email,
      password:userLogin.value.password
    }
    return this.http.post<any>("http://localhost:4500/login",credentials)
  }


  getAllUsers():Observable<any>{

    return this.http.get<any>("http://localhost:4500/all-users")

  }

}
