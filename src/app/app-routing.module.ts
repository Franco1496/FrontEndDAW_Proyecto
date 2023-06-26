import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarPropiedadComponent } from './componentes/propiedad/listar-propiedad/listar-propiedad.component';
import { AddPropiedadComponent } from './componentes/propiedad/add-propiedad/add-propiedad.component';
import { EditPropiedadComponent } from './componentes/propiedad/edit-propiedad/edit-propiedad.component';
import { HomeComponent } from './componentes/vistaCliente/home/home.component';
import { LoginComponent } from './componentes/vistaCliente/login/login.component';
import { ListaPropiedadesComponent } from './componentes/vistaCliente/lista-propiedades/lista-propiedades.component';

const routes: Routes = [
  {path: "clientes", component:ListarClienteComponent},
  {path: "nuevoCliente", component:AddClienteComponent},
  {path: "editarCliente", component:EditClienteComponent},

  {path: "propiedades", component:ListarPropiedadComponent},
  {path: "nuevaPropiedad", component:AddPropiedadComponent},
  {path: "editarPropiedad", component:EditPropiedadComponent},

  {path: "home", component:HomeComponent},
  {path: "listaPropiedades", component:ListaPropiedadesComponent},
  {path: "login", component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
