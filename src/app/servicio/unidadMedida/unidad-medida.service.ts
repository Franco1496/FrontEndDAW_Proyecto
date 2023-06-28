import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadMedida } from 'src/app/modelos/UnidadMedida';
import { TokenService } from '../usuario/token.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  url = 'http://localhost:8080/api';

  getUnidadMedidaList(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<UnidadMedida[]>(this.url+"/unidadMedida/", {headers});
  }
}
