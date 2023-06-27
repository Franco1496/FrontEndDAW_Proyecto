import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaPropiedadesComponent } from './vistaCliente/lista-propiedades/lista-propiedades.component';
import { HomeComponent } from './home/home.component';
import { EditPropiedadComponent } from './propiedad/edit-propiedad/edit-propiedad.component';
import { AddPropiedadComponent } from './propiedad/add-propiedad/add-propiedad.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { ListarAsesorComponent } from './asesor/listar-asesor/listar-asesor.component';
import { ListarCitaComponent } from './cita/listar-cita/listar-cita.component';
import { AddAsesorComponent } from './asesor/add-asesor/add-asesor.component';
import { EditAsesorComponent } from './asesor/edit-asesor/edit-asesor.component';
import { AddCitaComponent } from './cita/add-cita/add-cita.component';
import { EditCitaComponent } from './cita/edit-cita/edit-cita.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { ListarVentaComponent } from './venta/listar-venta/listar-venta.component';
import { AddVentaComponent } from './venta/add-venta/add-venta.component';
import { EditVentaComponent } from './venta/edit-venta/edit-venta.component';
import { MenuIzquierdaComponent } from '../shared/menu-izquierda/menu-izquierda.component';
import { ListarPropiedadComponent } from './propiedad/listar-propiedad/listar-propiedad.component';
import { IntranetComponent } from './intranet/intranet.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,

    IntranetComponent

  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    PagesComponent,
    HomeComponent,


    IntranetComponent
  ]

})
export class PagesModule { }
