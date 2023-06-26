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

@NgModule({
  declarations: [
    PagesComponent,
    ListaPropiedadesComponent,
    HomeComponent,
    EditPropiedadComponent,
    AddPropiedadComponent,
    EditClienteComponent
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
    ListaPropiedadesComponent,
    HomeComponent,
    EditPropiedadComponent,
    AddPropiedadComponent,

  ]

})
export class PagesModule { }
