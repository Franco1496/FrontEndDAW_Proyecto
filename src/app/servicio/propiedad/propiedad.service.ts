import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propiedad } from 'src/app/modelos/Propiedad';
import { TokenService } from '../usuario/token.service';
//import { Ubigeo } from 'src/app/modelos/Ubigeo';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  constructor(private http:HttpClient, private tokenService: TokenService) { }

  url = 'http://localhost:8080/api';

  getPropiedades(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Propiedad[]>(this.url+"/propiedad/", {headers})
  }

  createPropiedad(propiedad: Propiedad){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.post<Propiedad>(this.url+"/propiedad/",propiedad, {headers});
  }

  getPropiedadId(idPropiedad: number){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Propiedad>(this.url+"/propiedad/"+idPropiedad, {headers});
  }

  updatePropiedad(propiedad: Propiedad){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.put<Propiedad>(this.url+"/propiedad/", propiedad, {headers})
  }

  deletePropiedad(propiedad: Propiedad){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.delete<Propiedad>(this.url+"/propiedad/"+propiedad.idPropiedad, {headers});
  }

  /*
  getUbigeoList(){
    return this.http.get<Ubigeo[]>(this.url+"/ubigeo/");

  }
  */
}
