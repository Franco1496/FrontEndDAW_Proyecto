import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarPropiedadComponent } from './componentes/propiedad/listar-propiedad/listar-propiedad.component';
import { AddPropiedadComponent } from './componentes/propiedad/add-propiedad/add-propiedad.component';
import { EditPropiedadComponent } from './componentes/propiedad/edit-propiedad/edit-propiedad.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditAsesorComponent } from './componentes/asesor/edit-asesor/edit-asesor.component';
import { ListarAsesorComponent } from './componentes/asesor/listar-asesor/listar-asesor.component';
import { AddCitaComponent } from './componentes/cita/add-cita/add-cita.component';
import { EditCitaComponent } from './componentes/cita/edit-cita/edit-cita.component';
import { ListarCitaComponent } from './componentes/cita/listar-cita/listar-cita.component';
import { AddVentaComponent } from './componentes/venta/add-venta/add-venta.component';
import { EditVentaComponent } from './componentes/venta/edit-venta/edit-venta.component';
import { ListarVentaComponent } from './componentes/venta/listar-venta/listar-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListarPropiedadComponent,
    AddPropiedadComponent,
    EditPropiedadComponent,
    EditAsesorComponent,
    ListarAsesorComponent,
    AddCitaComponent,
    EditCitaComponent,
    ListarCitaComponent,
    AddVentaComponent,
    EditVentaComponent,
    ListarVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
