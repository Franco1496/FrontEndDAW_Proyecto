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
  selector: 'app-edit-propiedad',
  templateUrl: './edit-propiedad.component.html',
  styleUrls: ['./edit-propiedad.component.css']
})
export class EditPropiedadComponent implements OnInit{

  ubigeos?: Observable<Ubigeo[]>;

  tipo?: Observable<TipoPropiedad[]>;

  medida?: Observable<UnidadMedida[]>;

  propiedad: Propiedad = new Propiedad();

  constructor(private router:Router,
    private propiedadService:PropiedadService, private ubigeoService:UbigeoService,
    private tipoPropiedadService:TipoPropiedadService, private unidadMedidaService:UnidadMedidaService){}

  ngOnInit():void{
    this.editar();
    this.ubigeos = this.ubigeoService.getUbigeoList();
    this.tipo = this.tipoPropiedadService.getTipoPropiedadList();
    this.medida = this.unidadMedidaService.getUnidadMedidaList();
  }

  editar(){
    let idPropiedad = JSON.parse(localStorage.getItem('idPropiedad') as string);
    this.propiedadService.getPropiedadId(idPropiedad).subscribe(data=>{
      this.propiedad=data;
    });
  }

  actualizar(propiedad:Propiedad){
    this.propiedadService.updatePropiedad(propiedad).subscribe(data=>{
      this.propiedad=data;
      this.router.navigate(['propiedades']);
    })
  }
}
