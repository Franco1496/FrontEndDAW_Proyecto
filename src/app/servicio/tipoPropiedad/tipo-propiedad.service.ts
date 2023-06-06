import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoPropiedad } from 'src/app/modelos/TipoPropiedad';

@Injectable({
  providedIn: 'root'
})
export class TipoPropiedadService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api';

  getTipoPropiedadList(){
    return this.http.get<TipoPropiedad[]>(this.url+"/tipoPropiedad/");
  }

}
