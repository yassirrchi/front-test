import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { DashboardComponent } from './components/sections/dashboard/dashboard.component';
import { ClientsComponent } from './components/tables/clients/clients.component';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginFormComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"clients",component:ClientsComponent},
  {path:"clients/handle/:id",component:ClientFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
