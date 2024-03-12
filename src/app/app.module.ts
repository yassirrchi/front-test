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
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/sections/dashboard/dashboard.component';
import { tokenInterceptor } from './service/token.interceptor';
import { FooterComponent } from './components/ui/footer/footer.component';
import { UsersComponent } from './components/tables/users/users.component';
import { BillsComponent } from './components/tables/bills/bills.component';
import { ClientsComponent } from './components/tables/clients/clients.component';
import { ProductsComponent } from './components/tables/products/products.component';
import { ListAddBarComponent } from './components/shared/list-add-bar/list-add-bar.component';
import { ClientModalComponent } from './components/modals/client-modal/client-modal.component';
import { ItemsModalComponent } from './components/modals/items-modal/items-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginFormComponent,
    ProductFormComponent,
    BillFormComponent,
    ClientFormComponent,
    DashboardComponent,
    FooterComponent,
    UsersComponent,
    BillsComponent,
    ClientsComponent,
    ProductsComponent,
    ListAddBarComponent,
    ClientModalComponent,
    ItemsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
