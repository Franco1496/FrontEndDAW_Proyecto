import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from '../pages.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarPropiedadComponent } from '../propiedad/listar-propiedad/listar-propiedad.component';
import { AddPropiedadComponent } from '../propiedad/add-propiedad/add-propiedad.component';
import { EditPropiedadComponent } from '../propiedad/edit-propiedad/edit-propiedad.component';
import { ListarClienteComponent } from '../cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from '../cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from '../cliente/edit-cliente/edit-cliente.component';
import { ListarAsesorComponent } from '../asesor/listar-asesor/listar-asesor.component';
import { AddAsesorComponent } from '../asesor/add-asesor/add-asesor.component';
import { EditAsesorComponent } from '../asesor/edit-asesor/edit-asesor.component';
import { ListarCitaComponent } from '../cita/listar-cita/listar-cita.component';
import { AddCitaComponent } from '../cita/add-cita/add-cita.component';
import { EditCitaComponent } from '../cita/edit-cita/edit-cita.component';
import { ListarVentaComponent } from '../venta/listar-venta/listar-venta.component';
import { AddVentaComponent } from '../venta/add-venta/add-venta.component';
import { EditVentaComponent } from '../venta/edit-venta/edit-venta.component';

@NgModule({
  declarations: [

    ListarPropiedadComponent,
    AddPropiedadComponent,
    EditPropiedadComponent,

    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,

    ListarAsesorComponent,
    AddAsesorComponent,
    EditAsesorComponent,

    ListarCitaComponent,
    AddCitaComponent,
    EditCitaComponent,

    ListarVentaComponent,
    AddVentaComponent,
    EditVentaComponent,


  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    PagesRoutingModule,

  ],
  exports: [

    ListarPropiedadComponent,
    AddPropiedadComponent,
    EditPropiedadComponent,

    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,

    ListarAsesorComponent,
    AddAsesorComponent,
    EditAsesorComponent,

    ListarCitaComponent,
    AddCitaComponent,
    EditCitaComponent,

    ListarVentaComponent,
    AddVentaComponent,
    EditVentaComponent,

  ]

})
export class PagesModule { }
