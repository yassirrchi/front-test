import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../service/client.service';
import { ProductService } from '../../../service/product.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrl: './bill-form.component.css'
})
export class BillFormComponent implements OnInit {
  clients:any=[]
  products:any=[]
  billItems:any=[]
  billForm=new FormGroup({
    client_id: new FormControl(''),
    
  });
  item:any
  openProductsBox=false;
  total=0;

  constructor(private clientsService:ClientService,private productService:ProductService){

     
  }
  ngOnInit(): void {

  this.clientsService.getAllClients().subscribe((data)=>{
    this.clients=data
    console.log(this.clients)
     
  },(error)=>{

    console.log(error)
  })
  this.productService.getAllProducts().subscribe((data)=>{
    this.products=data
     
     
  },(error)=>{

    console.log(error)
  })





  }
  addProductToItems(product:any){
    
    this.openProductsBox=false;
    const productExists = this.billItems.some((item: { product_id: number; }) => item.product_id === product.id);
    if(productExists){
      alert("Produit existe deja")
    }
    if(!productExists){
       
    let newItem={
      product_id:product.id,
      product_name:product.name,
      quantity:1,
      price:product.price
    }
    this.billItems.push(newItem)
    }
     
this.counterService()
     
    
  }
  addQuantity(productid:number){

  }
  removeQuantity(productid:number){

  }
  showProducts(){
    this.openProductsBox=true;
  }
  counterService(){
    //this.total+=this.item.quantity*this.item.price
    console.log("//////")
    this.total=0


    this.billItems.forEach((item:any)=>{
      
      this.total+=item.price*item.quantity
       
    console.log("//////")})





  }

  


}
