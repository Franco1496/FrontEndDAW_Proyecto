import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propiedad } from 'src/app/modelos/Propiedad';
import { CargarScriptsService } from 'src/app/servicio/cargar-scripts.service';
import { PropiedadService } from 'src/app/servicio/propiedad/propiedad.service';

@Component({
  selector: 'app-listar-propiedad',
  templateUrl: './listar-propiedad.component.html',
  styleUrls: ['./listar-propiedad.component.css']
})
export class ListarPropiedadComponent implements OnInit {

  propiedades?:Propiedad[];

  constructor(private propiedadService:PropiedadService, private _CargarScripts: CargarScriptsService, private router: Router){

    //_CargarScripts.Carga(["crud/table"])

  }

  ngOnInit(): void {

    this._CargarScripts.Carga(["crud/table"])
    
    this.propiedadService.getPropiedades().subscribe(
      data=>{
        this.propiedades=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );

  }


  listaClientes(){
    this.router.navigate(['clientes']);
  }

  listaPropiedades(){
    this.router.navigate(['propiedades']);
  }


  nuevo():void{
    this.router.navigate(['nuevaPropiedad']);
  }

  editar(propiedad:Propiedad):void{
    localStorage.setItem("idPropiedad",propiedad.idPropiedad.toString());
    this.router.navigate(['editarPropiedad']);
  }

  eliminar(propiedad:Propiedad):void{
    this.propiedadService.deletePropiedad(propiedad).subscribe(data=>{
      this.propiedades=this.propiedades!.filter(p=>p!==propiedad);
    })
  }

}
