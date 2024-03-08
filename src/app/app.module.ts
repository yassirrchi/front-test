import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { BillFormComponent } from './components/forms/bill-form/bill-form.component';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/sections/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginFormComponent,
    ProductFormComponent,
    BillFormComponent,
    ClientFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
