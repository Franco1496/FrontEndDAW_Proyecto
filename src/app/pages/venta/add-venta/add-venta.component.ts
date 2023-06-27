import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/modelos/Venta';
import { VentaService } from 'src/app/servicio/venta/venta.service';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit {

  modelVenta = new Venta();

  constructor( private router:Router , private ventaService:VentaService) { }

  ngOnInit(): void {
  }


  guardar(venta:Venta){

    this.ventaService.createVenta(venta).subscribe( data=>{
      this.router.navigate(['ventas']);
    })
  }

}