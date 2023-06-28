import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoPropiedad } from 'src/app/modelos/TipoPropiedad';
import { TokenService } from '../usuario/token.service';

@Injectable({
  providedIn: 'root'
})
export class TipoPropiedadService {

  constructor(private http:HttpClient, private tokenService: TokenService) { }

  url = 'http://localhost:8080/api';

  getTipoPropiedadList(){
    var token = "Bearer " + this.tokenService.getToken();
    console.log(token);
    const headers = { 'Authorization': token }
    return this.http.get<TipoPropiedad[]>(this.url+"/tipoPropiedad/", {headers});
  }

}
