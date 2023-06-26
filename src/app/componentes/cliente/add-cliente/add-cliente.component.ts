import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modelos/Cliente';
import { Ubigeo } from 'src/app/modelos/Ubigeo';
import { ClienteService } from 'src/app/servicio/cliente/cliente.service';
import { UbigeoService } from 'src/app/servicio/ubigeo/ubigeo.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit{

  //clientes?:Cliente[];

  ubigeos?: Observable<Ubigeo[]>;
  
  modelCliente = new Cliente();

  constructor(private router:Router, private clienteService:ClienteService, private ubigeoService:UbigeoService){}


  
  ngOnInit(): void {

    this.ubigeos = this.ubigeoService.getUbigeoList();
    

  }

  guardar(cliente: Cliente){
    this.clienteService.createCliente(cliente).subscribe(data=>{
      this.router.navigate(['clientes']);
    });
  }

  listaCliente(){
    this.router.navigate(['clientes']);
  }

  listaPropiedades(){
    this.router.navigate(['propiedades']);
  }

}
