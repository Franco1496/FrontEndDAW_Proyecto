import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { ListaPropiedadesComponent } from "./vistaCliente/lista-propiedades/lista-propiedades.component";
import { ListarClienteComponent } from "./cliente/listar-cliente/listar-cliente.component";
import { LoginComponent } from "./vistaCliente/login/login.component";
import { AddClienteComponent } from "./cliente/add-cliente/add-cliente.component";
import { EditClienteComponent } from "./cliente/edit-cliente/edit-cliente.component";
import { ListarPropiedadComponent } from "./propiedad/listar-propiedad/listar-propiedad.component";
import { AddPropiedadComponent } from "./propiedad/add-propiedad/add-propiedad.component";
import { EditPropiedadComponent } from "./propiedad/edit-propiedad/edit-propiedad.component";


const routes: Routes = [
  //  {path: "home", component:HomeComponent},
  //  {path: "listaPropiedades", component:ListaPropiedadesComponent},
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: "clientes", component: ListarClienteComponent },
      { path: "nuevoCliente", component: AddClienteComponent },
      { path: "editarCliente", component: EditClienteComponent },

      { path: "propiedades", component: ListarPropiedadComponent },
      { path: "nuevaPropiedad", component: AddPropiedadComponent },
      { path: "editarPropiedad", component: EditPropiedadComponent },

      { path: "listaPropiedades", component: ListaPropiedadesComponent },
      { path: "login", component: LoginComponent }


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
