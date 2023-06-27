import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/modelos/Venta';
import { CargarScriptsService } from 'src/app/servicio/cargar-scripts.service';
import { VentaService } from 'src/app/servicio/venta/venta.service';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {

  ventas? :Venta[];

  constructor(private ventaService:VentaService, private _CargarScripts: CargarScriptsService, private router: Router){
  
    //_CargarScripts.Carga(["crud/table"])
  
  }

  ngOnInit(): void {

   this._CargarScripts.Carga(["crud/table"])
      
      this.ventaService.getVentas().subscribe(
        data=>{
          this.ventas=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        }
      );

    }


    listaVentas(){
      this.router.navigate(['ventas']);
    }

    nuevo():void{
      this.router.navigate(['nuevaVenta']);
    }

    editar(venta:Venta):void{
      localStorage.setItem("id_venta",venta.id_venta.toString());
      this.router.navigate(['editarVenta']);
    }

    eliminar(venta:Venta):void{
      this.ventaService.deleteVenta(venta).subscribe(data=>{
        this.ventas=this.ventas!.filter(c=>c!==venta);
      })
    }

}
