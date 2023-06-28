import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from 'src/app/modelos/Cita';
import { TokenService } from '../usuario/token.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  url = 'http://localhost:8080/api';


  getCitas(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Cita[]>(this.url+"/cita/", {headers})
  }

  createCita(cita: Cita){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    console.log(cita);
    return this.http.post<Cita>(this.url+"/cita/",cita, {headers});
  }

  getCitaId(id_cita: number){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Cita>(this.url+"/cita/"+id_cita, {headers});
  }

  updateCita(cita: Cita){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.put<Cita>(this.url+"/cita/", cita, {headers})
  }

  deleteCita(cita: Cita){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.delete<Cita>(this.url+"/cita/"+cita.id_cita, {headers});
  }
}