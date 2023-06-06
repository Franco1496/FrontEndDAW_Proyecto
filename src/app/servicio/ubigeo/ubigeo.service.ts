import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ubigeo } from 'src/app/modelos/Ubigeo';


@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api';

  
  getUbigeoList(){
    return this.http.get<Ubigeo[]>(this.url+"/ubigeo/");

  }
}
