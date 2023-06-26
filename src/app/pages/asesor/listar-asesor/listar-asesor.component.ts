import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Asesor } from 'src/app/modelos/Asesor';
import { AsesorService } from 'src/app/servicio/asesor/asesor.service';
import { CargarScriptsService } from 'src/app/servicio/cargar-scripts.service';

@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
})
export class ListarAsesorComponent implements OnInit {

  asesores? :Asesor[];

  constructor( private asesorService:AsesorService, private _CargarScripts: CargarScriptsService, private router: Router){

          //_CargarScripts.Carga(["crud/table"])

  }

  ngOnInit(): void {

    this._CargarScripts.Carga(["crud/table"])

    this.asesorService.getAsesores().subscribe(
      data=>{
        this.asesores=data;
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    );

  }

  nuevo():void{
    this.router.navigate(['nuevoCliente']);
  }

  editar(asesor:Asesor):void{
    localStorage.setItem("id_asesor",asesor.id_asesor.toString());
    this.router.navigate(['editarAsesor']);
  }


  eliminar(asesor:Asesor):void{
    this.asesorService.deleteAsesor(asesor).subscribe(data=>{
      this.asesores=this.asesores!.filter(c=>c!==asesor);
    })
  }

}

