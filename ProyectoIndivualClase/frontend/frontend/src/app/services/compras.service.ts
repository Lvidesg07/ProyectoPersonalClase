import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../models/cliente';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/compras/`
  
  constructor(
    private http:HttpClient,
    private router:Router) {
  }
  
  getAllCompras(){
    return this.http
      .get<Compra[]>(this.base_path);
  }
}
