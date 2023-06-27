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
import { AddVentaComponent } from "./venta/add-venta/add-venta.component";
import { ListarVentaComponent } from "./venta/listar-venta/listar-venta.component";
import { EditVentaComponent } from "./venta/edit-venta/edit-venta.component";
import { ListarAsesorComponent } from "./asesor/listar-asesor/listar-asesor.component";
import { AddAsesorComponent } from "./asesor/add-asesor/add-asesor.component";
import { EditAsesorComponent } from "./asesor/edit-asesor/edit-asesor.component";
import { ListarCitaComponent } from "./cita/listar-cita/listar-cita.component";
import { AddCitaComponent } from "./cita/add-cita/add-cita.component";
import { EditCitaComponent } from "./cita/edit-cita/edit-cita.component";
import { IntranetComponent } from "./intranet/intranet.component";


const routes: Routes = [
  //  {path: "home", component:HomeComponent},
  //  {path: "listaPropiedades", component:ListaPropiedadesComponent},
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'intranet',
        component: IntranetComponent,
        children: [
          { path: '', redirectTo: 'clientes', pathMatch: 'full' },
          { path: "clientes", component: ListarClienteComponent },
          { path: "nuevoCliente", component: AddClienteComponent },
          { path: "editarCliente", component: EditClienteComponent },

          { path: "propiedades", component: ListarPropiedadComponent },
          { path: "nuevapropiedad", component: AddPropiedadComponent },
          { path: "editarpropiedad", component: EditPropiedadComponent },

          { path: "venta", component: ListarVentaComponent },
          { path: "nuevaventa", component: AddVentaComponent },
          { path: "editarventa", component: EditVentaComponent },

          { path: "asesor", component: ListarAsesorComponent },
          { path: "nuevoasesor", component: AddAsesorComponent },
          { path: "editarasesor", component: EditAsesorComponent },

          { path: "cita", component: ListarCitaComponent },
          { path: "nuevacita", component: AddCitaComponent },
          { path: "editarcita", component: EditCitaComponent },
        ]
      },
      { path: "listaPropiedades", component: ListaPropiedadesComponent },
      { path: "login", component: LoginComponent },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
