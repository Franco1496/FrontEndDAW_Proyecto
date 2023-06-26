import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from 'src/app/modelos/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api';


  getCitas(){
    return this.http.get<Cita[]>(this.url+"/cita/")
  }

  createCita(cita: Cita){
    return this.http.post<Cita>(this.url+"/cita/",cita);
  }

  getCitaId(id_cita: number){
    return this.http.get<Cita>(this.url+"/cita/"+id_cita);
  }

  updateCita(cita: Cita){
    return this.http.put<Cita>(this.url+"/cita/", cita)
  }

  deleteCita(cita: Cita){
    return this.http.delete<Cita>(this.url+"/cita/"+cita.id_cita);
  }
}