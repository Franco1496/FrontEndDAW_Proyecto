import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Propiedad } from 'src/app/modelos/Propiedad';
import { TipoPropiedad } from 'src/app/modelos/TipoPropiedad';
import { Ubigeo } from 'src/app/modelos/Ubigeo';
import { UnidadMedida } from 'src/app/modelos/UnidadMedida';
import { PropiedadService } from 'src/app/servicio/propiedad/propiedad.service';
import { TipoPropiedadService } from 'src/app/servicio/tipoPropiedad/tipo-propiedad.service';
import { UbigeoService } from 'src/app/servicio/ubigeo/ubigeo.service';
import { UnidadMedidaService } from 'src/app/servicio/unidadMedida/unidad-medida.service';

@Component({
  selector: 'app-add-propiedad',
  templateUrl: './add-propiedad.component.html',
  styleUrls: ['./add-propiedad.component.css']
})
export class AddPropiedadComponent implements OnInit{

  ubigeos?: Observable<Ubigeo[]>;

  tipo?: Observable<TipoPropiedad[]>;

  medida?: Observable<UnidadMedida[]>;

  modelPropiedad = new Propiedad();

  constructor(private router:Router,
    private propiedadService:PropiedadService, private ubigeoService:UbigeoService,
    private tipoPropiedadService:TipoPropiedadService, private unidadMedidaService:UnidadMedidaService){}

  ngOnInit(): void {

    this.ubigeos = this.ubigeoService.getUbigeoList();
    this.tipo = this.tipoPropiedadService.getTipoPropiedadList();
    this.medida = this.unidadMedidaService.getUnidadMedidaList();
  }

  guardar(propiedad: Propiedad){
    this.propiedadService.createPropiedad(propiedad).subscribe(data=>{
      this.router.navigate(['propiedades']);
    });
  }

  listaClientes(){
    this.router.navigate(['clientes']);
  }

  listaPropiedades(){
    this.router.navigate(['propiedades']);
  }

}
