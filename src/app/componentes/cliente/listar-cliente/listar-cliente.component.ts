import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { CargarScriptsService } from 'src/app/servicio/cargar-scripts.service';
import { ClienteService } from 'src/app/servicio/cliente/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

    clientes?:Cliente[];

    constructor(private clienteService:ClienteService, private _CargarScripts: CargarScriptsService, private router: Router){

      //_CargarScripts.Carga(["crud/table"])

    }

    

    ngOnInit(): void {

      this._CargarScripts.Carga(["crud/table"])
      
      this.clienteService.getClientes().subscribe(
        data=>{
          this.clientes=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        }
      );

    }

    nuevo():void{
      this.router.navigate(['nuevoCliente']);
    }

    editar(cliente:Cliente):void{
      localStorage.setItem("id_cliente",cliente.id_cliente.toString());
      this.router.navigate(['editarCliente']);
    }

    eliminar(cliente:Cliente):void{
      this.clienteService.deleteCliente(cliente).subscribe(data=>{
        this.clientes=this.clientes!.filter(c=>c!==cliente);
      })
    }

}
