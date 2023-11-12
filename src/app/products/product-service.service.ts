import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  // url: string = "https://fakestoreapi.com/products";
  url: string = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.url);
  }

  getProductById(id: number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(this.url + `/${id}`);
  }

  addProduct(e: IProduct): Observable<IProduct>{
    return this.httpClient.post<IProduct>(this.url, e);
  }

  updateProduct(e: IProduct): Observable<IProduct>{
    return this.httpClient.put<IProduct>(this.url + `/${e.id}`, e);
  }

  deleteProduct(id: number): Observable<IProduct>{
    return this.httpClient.delete<IProduct>(this.url + `/${id}`);
  }

}
