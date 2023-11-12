
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products: IProduct[] = [];

  constructor(private productService: ProductServiceService){}


  ngOnInit(): void {
    // Aqui traemos la funcion desde el service
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data
      console.log(data);
    })
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe((data) => {
      this.getProducts();
      console.log(`Elemento ${data.title} eliminado`);
    })
  }

}
