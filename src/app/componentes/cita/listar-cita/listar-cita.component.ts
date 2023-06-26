import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/modelos/Cita';
import { CargarScriptsService } from 'src/app/servicio/cargar-scripts.service';
import { CitaService } from 'src/app/servicio/cita/cita.service';
import { PropiedadService } from 'src/app/servicio/propiedad/propiedad.service';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  citas?:Cita[];

  constructor(private citaService:CitaService, private _CargarScripts: CargarScriptsService, private router: Router){

   }

  ngOnInit(): void {

    this._CargarScripts.Carga(["crud/table"])

    this.citaService.getCitas().subscribe(
      data=>{
        this.citas=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );

  }


  nuevo():void{
    this.router.navigate(['nuevaCita']);
  }

  editar(cita:Cita):void{
    localStorage.setItem("id_cita",cita.id_cita.toString());
    this.router.navigate(['editarCita']);
  }

  eliminar(cita:Cita):void{
    this.citaService.deleteCita(cita).subscribe(data=>{
      this.citas=this.citas!.filter(p=>p!==cita);
    })
  }

}
