import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/proveedores/`
  
  constructor(
    private http:HttpClient,
    private router:Router) {
  }
  
  getAllProveedores(){
    return this.http
      .get<Proveedor[]>(this.base_path);
  }
}
