import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ubigeo } from 'src/app/modelos/Ubigeo';
import { TokenService } from '../usuario/token.service';


@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor(private http:HttpClient, private tokenService: TokenService) { }
  url = 'http://localhost:8080/api';

  
  getUbigeoList(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Ubigeo[]>(this.url+"/ubigeo/", {headers});
  }
}
