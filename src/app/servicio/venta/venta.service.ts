import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from 'src/app/modelos/Venta';
import { TokenService } from '../usuario/token.service';

@Injectable({
  providedIn: 'root'
})
export class VentaService {


  constructor(private http:HttpClient, private tokenService: TokenService) { }
  url = 'http://localhost:8080/api';


  getVentas(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Venta[]>(this.url+"/venta/", {headers});
  }

  createVenta(venta:Venta){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.post<Venta>(this.url+"/venta/",venta, {headers});
  }

  getVentaId(id_venta:number) {
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<Venta>(this.url+"/venta/"+id_venta, {headers});
  }

  updateVenta(venta :Venta){ 
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.put<Venta>(this.url+"/venta/", venta, {headers});
  }

  deleteVenta(venta :Venta){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.delete<Venta>(this.url+"/venta/"+venta.id_venta, {headers});
    
  }
}
