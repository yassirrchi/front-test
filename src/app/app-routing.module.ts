import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { DashboardComponent } from './components/sections/dashboard/dashboard.component';
import { ClientsComponent } from './components/tables/clients/clients.component';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';
import { ProductsComponent } from './components/tables/products/products.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { BillsComponent } from './components/tables/bills/bills.component';
import { BillFormComponent } from './components/forms/bill-form/bill-form.component';
import { UsersComponent } from './components/tables/users/users.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginFormComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"clients",component:ClientsComponent},
  {path:"clients/handle/:id",component:ClientFormComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/handle/:id",component:ProductFormComponent},
  {path:"bills",component:BillsComponent},
  {path:"bills/handle/:id",component:BillFormComponent},
  {path:"users",component:UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
