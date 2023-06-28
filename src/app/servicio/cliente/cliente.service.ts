import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/modelos/Cliente';
import { TokenService } from '../usuario/token.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }
  url = 'http://localhost:8080/api';


  /*
  createUbigeo(ubigeo: Ubigeo){
    return this.http.post<Ubigeo>(this.url+"/ubigeo/",ubigeo);
  }
  */


  getClientes(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Cliente[]>(this.url+"/cliente/", {headers});
  }

  createCliente(cliente: Cliente){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.post<Cliente>(this.url+"/cliente/",cliente, {headers});
  }

  getClienteId(id_cliente: number){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Cliente>(this.url+"/cliente/"+id_cliente, {headers});
  }

  updateCliente(cliente: Cliente){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.put<Cliente>(this.url+"/cliente/",cliente, {headers});
  }

  deleteCliente(cliente: Cliente){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.delete<Cliente>(this.url+"/cliente/"+cliente.id_cliente, {headers});
  }
  
}
