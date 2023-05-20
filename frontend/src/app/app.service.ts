import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product {
  gtin: number;
  name: string;
  image: string;
  brandName: string;
  category: string;
  color: string;
  stock: number;
  price: number;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
}
