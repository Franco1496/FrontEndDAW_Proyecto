import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api';


  /*
  createUbigeo(ubigeo: Ubigeo){
    return this.http.post<Ubigeo>(this.url+"/ubigeo/",ubigeo);
  }
  */

  getClientes(){
    return this.http.get<Cliente[]>(this.url+"/cliente/");
  }

  createCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.url+"/cliente/",cliente);
  }

  getClienteId(id_cliente: number){
    return this.http.get<Cliente>(this.url+"/cliente/"+id_cliente);
  }

  updateCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.url+"/cliente/",cliente);
  }

  deleteCliente(cliente: Cliente){
    return this.http.delete<Cliente>(this.url+"/cliente/"+cliente.id_cliente);
  }
  
}
