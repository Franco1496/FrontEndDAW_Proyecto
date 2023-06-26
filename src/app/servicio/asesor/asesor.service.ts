import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asesor } from 'src/app/modelos/Asesor';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api';



  getAsesores(){
    return this.http.get<Asesor[]>(this.url+"/asesor/");
  }

  createAsesor(asesor : Asesor){
    return this.http.post<Asesor>(this.url+"/asesor/",asesor);
  }

  getAsesorId(id_asesor: number){
    return this.http.get<Asesor>(this.url+"/asesor/"+id_asesor);
  }

  updateAsesor(asesor: Asesor){
    return this.http.put<Asesor>(this.url+"/asesor/",asesor);
  }

  deleteAsesor(asesor: Asesor){
    return this.http.delete<Asesor>(this.url+"/asesor/"+asesor.id_asesor);
  }

}
