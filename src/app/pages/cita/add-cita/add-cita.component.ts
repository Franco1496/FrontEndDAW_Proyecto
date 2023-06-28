import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelos/Cita';
import { CitaService } from 'src/app/servicio/cita/cita.service';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent implements OnInit {

  modelCita = new Cita();

  constructor( private router:Router, private citaService:CitaService) { }

  ngOnInit(): void {
  }

  guardar(cita:Cita) {
    cita.flag_estado = "true";
    this.citaService.createCita(cita).subscribe( data=>{
      this.router.navigate(['cita']);
    })
  }

}
