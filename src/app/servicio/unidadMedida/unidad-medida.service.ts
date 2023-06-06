import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadMedida } from 'src/app/modelos/UnidadMedida';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api';

  getUnidadMedidaList(){
    return this.http.get<UnidadMedida[]>(this.url+"/unidadMedida/");
  }
}
