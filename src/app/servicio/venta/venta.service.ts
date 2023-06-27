import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from 'src/app/modelos/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {


  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api';


  getVentas(){
    return this.http.get<Venta[]>(this.url+"/venta/");
  }

  createVenta(venta:Venta){
    return this.http.post<Venta>(this.url+"/venta/",venta);
  }

  getVentaId(id_venta:number) {
    return this.http.get<Venta>(this.url+"/venta/"+id_venta);
  }

  updateVenta(venta :Venta){ 
    return this.http.put<Venta>(this.url+"/venta/", venta);
  }

  deleteVenta(venta :Venta){
    return this.http.delete<Venta>(this.url+"/venta/"+venta.id_venta);
    
  }


}
