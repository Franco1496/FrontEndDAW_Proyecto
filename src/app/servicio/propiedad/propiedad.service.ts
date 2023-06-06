import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propiedad } from 'src/app/modelos/Propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api';

  getPropiedades(){
    return this.http.get<Propiedad[]>(this.url+"/propiedad/")
  }

  createPropiedad(propiedad: Propiedad){
    return this.http.post<Propiedad>(this.url+"/propiedad/",propiedad);
  }

  getPropiedadId(idPropiedad: number){
    return this.http.get<Propiedad>(this.url+"/propiedad/"+idPropiedad);
  }

  updatePropiedad(propiedad: Propiedad){
    return this.http.put<Propiedad>(this.url+"/propiedad/", propiedad)
  }

  deletePropiedad(propiedad: Propiedad){
    return this.http.delete<Propiedad>(this.url+"/propiedad/"+propiedad.idPropiedad);
  }
}