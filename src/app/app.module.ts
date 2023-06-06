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

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListarPropiedadComponent,
    AddPropiedadComponent,
    EditPropiedadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
