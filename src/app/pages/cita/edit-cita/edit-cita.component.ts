import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelos/Cita';
import { CitaService } from 'src/app/servicio/cita/cita.service';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.css']
})
export class EditCitaComponent implements OnInit {

  cita: Cita = new Cita();

  constructor(private router:Router, private citaService:CitaService) { }

  ngOnInit(): void {
  }


  editar(){
    
    let id_cita = JSON.parse(localStorage.getItem('id_cita') as string);
    this.citaService.getCitaId(id_cita).subscribe(data=>{
      this.cita=data;
    });
  }

  actualizar( cita:Cita){
    cita.flag_estado = "true";
    this.citaService.updateCita(cita).subscribe(data=>{
      this.cita=data;
      this.router.navigate(['cita']);
    })
  }

}
