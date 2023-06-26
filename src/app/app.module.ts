import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CargarScriptsService } from './servicio/cargar-scripts.service';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarPropiedadComponent } from './componentes/propiedad/listar-propiedad/listar-propiedad.component';
import { AddPropiedadComponent } from './componentes/propiedad/add-propiedad/add-propiedad.component';
import { EditPropiedadComponent } from './componentes/propiedad/edit-propiedad/edit-propiedad.component';
import { HomeComponent } from './componentes/vistaCliente/home/home.component';
import { ListaPropiedadesComponent } from './componentes/vistaCliente/lista-propiedades/lista-propiedades.component';
import { DetallePropiedadComponent } from './componentes/vistaCliente/detalle-propiedad/detalle-propiedad.component';
import { LoginComponent } from './componentes/vistaCliente/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListarPropiedadComponent,
    AddPropiedadComponent,
    EditPropiedadComponent,
    HomeComponent,
    ListaPropiedadesComponent,
    DetallePropiedadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
