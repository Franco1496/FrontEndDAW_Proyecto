import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asesor } from 'src/app/modelos/Asesor';
import { TokenService } from '../usuario/token.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(private http:HttpClient, private tokenService: TokenService) { }
  url = 'http://localhost:8080/api';



  getAsesores(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Asesor[]>(this.url+"/asesor/", {headers});
  }

  createAsesor(asesor : Asesor){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.post<Asesor>(this.url+"/asesor/",asesor, {headers});
  }

  getAsesorId(id_asesor: number){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Asesor>(this.url+"/asesor/"+id_asesor, {headers});
  }

  updateAsesor(asesor: Asesor){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.put<Asesor>(this.url+"/asesor/",asesor, {headers});
  }

  deleteAsesor(asesor: Asesor){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.delete<Asesor>(this.url+"/asesor/"+asesor.id_asesor, {headers});
  }

}
