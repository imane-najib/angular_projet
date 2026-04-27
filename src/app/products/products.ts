import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true
})
export class Products implements OnInit{
    products : any;

    constructor(private serviceProducts : ProductService){}

    ngOnInit():void{
       this.getAllProduct();
    }

    getAllProduct():void{
         this.products = this.serviceProducts.getAllProduct().subscribe({
              next : resp => {
                this.products=resp;
              },
              error : err => {
                console.log(err);
              }

          });
    }

  handleDelete(product : any):void{
    let v = confirm('etes vous sure de vouloir supprimer?');
    if(v==true){
      this.serviceProducts.DeleteProduct(product).subscribe({
          next : resp => {
              this.getAllProduct();
          },
          error: err =>{
              console.log(err);
          }

      })


    }


  }

  }
