import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/modelos/Venta';
import { VentaService } from 'src/app/servicio/venta/venta.service';

@Component({
  selector: 'app-edit-venta',
  templateUrl: './edit-venta.component.html',
  styleUrls: ['./edit-venta.component.css']
})
export class EditVentaComponent implements OnInit {

  venta : Venta = new Venta();

  constructor(private router:Router, private ventaService:VentaService) { }

  ngOnInit(): void {
  }

  editar(){
    let id_venta = JSON.parse(localStorage.getItem('id_venta') as string);
    this.ventaService.getVentaId(id_venta).subscribe(data=>{
      this.venta=data;
    });
  }

  actualizar( venta:Venta){
    this.ventaService.updateVenta(venta).subscribe(data=>{
      this.venta=data;
      this.router.navigate(['ventas']);
    })
  }

}
