import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/productos/`
  
  constructor(
    private http:HttpClient,
    private router:Router) {
  }
  
  getAllProductos(){
    return this.http
      .get<Producto[]>(this.base_path);
  }
}
