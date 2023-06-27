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
import { ListaAsesoresComponent } from "./vistaCliente/lista-asesores/lista-asesores.component";
import { ContactanosComponent } from "./vistaCliente/contactanos/contactanos.component";
import { NosotrosComponent } from "./vistaCliente/nosotros/nosotros.component";


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
      { path: "listaAsesores", component: ListaAsesoresComponent },
      { path: "login", component: LoginComponent },

      { path: "venta", component: ListarVentaComponent },
      { path: "nuevaVenta", component: AddVentaComponent },
      { path: "editarVenta", component: EditVentaComponent },

      { path: "asesor", component: ListarAsesorComponent },
      { path: "nuevoAsesor", component: AddAsesorComponent },
      { path: "editarAsesor", component: EditAsesorComponent },

      { path: "cita", component: ListarCitaComponent },
      { path: "nuevaCita", component: AddCitaComponent },
      { path: "editarCita", component: EditCitaComponent },

      { path: "contactanos", component:ContactanosComponent },
      { path: "nosotros", component:NosotrosComponent}


    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
