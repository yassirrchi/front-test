import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:any=[]
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data)=>{
      this.products=data
       

    },(error)=>{

      console.log(error)
    })
     
  }
  

}
