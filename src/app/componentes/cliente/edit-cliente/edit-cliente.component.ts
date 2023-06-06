import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modelos/Cliente';
import { Ubigeo } from 'src/app/modelos/Ubigeo';
import { ClienteService } from 'src/app/servicio/cliente/cliente.service';
import { UbigeoService } from 'src/app/servicio/ubigeo/ubigeo.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit{

  ubigeos?: Observable<Ubigeo[]>;

  cliente: Cliente = new Cliente();

  constructor(private router:Router, private clienteService:ClienteService, private ubigeoService:UbigeoService){}

  ngOnInit():void{
    this.editar();
    this.ubigeos = this.ubigeoService.getUbigeoList();
  }

  editar(){
    let id_cliente = JSON.parse(localStorage.getItem('id_cliente') as string);
    this.clienteService.getClienteId(id_cliente).subscribe(data=>{
      this.cliente=data;
    });
  }

  actualizar(cliente:Cliente){
    this.clienteService.updateCliente(cliente).subscribe(data=>{
      this.cliente=data;
      this.router.navigate(['clientes']);
    })
  }

}
