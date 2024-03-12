import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../service/client.service';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrl: './bill-form.component.css'
})
export class BillFormComponent implements OnInit {
  clients:any=[]
  products:any=[]
  billItems:any=[]
  item:any

  constructor(private clientsService:ClientService,private productService:ProductService){

    this.billItems=[{quantity:2,product_id:2},{quantity:7,product_id:1}]
    console.log(this.billItems)
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
  addProductToItems(productid:number){
    const productExists = this.billItems.some((item: { product_id: number; }) => item.product_id === productid);
    if(!productExists){
       
    let newItem={
      product_id:productid,
      quantity:1
    }
    this.billItems.push(newItem)
    }
     

     
    
  }
  addQuantity(productid:number){

  }
  removeQuantity(productid:number){

  }

  


}
