import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient){
    }
  getAllProduct(){
    return this.http.get("http://localhost:8083/products");
  }
  DeleteProduct(product:any){
    return this.http.delete("http://localhost:8083/products/"+product.id);
   }
}
