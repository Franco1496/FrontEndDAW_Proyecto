import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListarClienteComponent } from './pages/cliente/listar-cliente/listar-cliente.component';
// import { AddClienteComponent } from './pages/cliente/add-cliente/add-cliente.component';
// import { EditClienteComponent } from './pages/cliente/edit-cliente/edit-cliente.component';
// import { ListarPropiedadComponent } from './pages/propiedad/listar-propiedad/listar-propiedad.component';
// import { AddPropiedadComponent } from './pages/propiedad/add-propiedad/add-propiedad.component';
// import { EditPropiedadComponent } from './pages/propiedad/edit-propiedad/edit-propiedad.component';
import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/vistaCliente/login/login.component';
// import { ListaPropiedadesComponent } from './pages/vistaCliente/lista-propiedades/lista-propiedades.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { PagesComponent } from './pages/pages.component';
import { ListarClienteComponent } from './pages/cliente/listar-cliente/listar-cliente.component';
import { ListarPropiedadComponent } from './pages/propiedad/listar-propiedad/listar-propiedad.component';
import { ListaPropiedadesComponent } from './pages/vistaCliente/lista-propiedades/lista-propiedades.component';

const routes: Routes = [
   {path: "", component:PagesComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path: "clientes", component:ListarClienteComponent},
  // {path: "nuevoCliente", component:AddClienteComponent},
  // {path: "editarCliente", component:EditClienteComponent},

  //  {path: "propiedades", component:ListarPropiedadComponent},
  // {path: "nuevaPropiedad", component:AddPropiedadComponent},
  // {path: "editarPropiedad", component:EditPropiedadComponent},

  // {path: "home", component:HomeComponent},
  //{path: "listaPropiedades", component:ListaPropiedadesComponent},
  // {path: "login", component:LoginComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
