import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Distribucion } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class DistribucionesService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/distribuciones/`
  
  constructor(
    private http:HttpClient,
    private router:Router) {
  }
  
  getAllDistribuciones(){
    return this.http
      .get<Distribucion[]>(this.base_path);
  }
}
