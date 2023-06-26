import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarPropiedadComponent } from './componentes/propiedad/listar-propiedad/listar-propiedad.component';
import { AddPropiedadComponent } from './componentes/propiedad/add-propiedad/add-propiedad.component';
import { EditPropiedadComponent } from './componentes/propiedad/edit-propiedad/edit-propiedad.component';
import { ListarAsesorComponent } from './componentes/asesor/listar-asesor/listar-asesor.component';
import { AddAsesorComponent } from './componentes/asesor/add-asesor/add-asesor.component';
import { EditAsesorComponent } from './componentes/asesor/edit-asesor/edit-asesor.component';
import { ListarCitaComponent } from './componentes/cita/listar-cita/listar-cita.component';
import { AddCitaComponent } from './componentes/cita/add-cita/add-cita.component';
import { EditCitaComponent } from './componentes/cita/edit-cita/edit-cita.component';
import { ListarVentaComponent } from './componentes/venta/listar-venta/listar-venta.component';
import { AddVentaComponent } from './componentes/venta/add-venta/add-venta.component';
import { EditVentaComponent } from './componentes/venta/edit-venta/edit-venta.component';

const routes: Routes = [
  {path: "clientes", component:ListarClienteComponent},
  {path: "nuevoCliente", component:AddClienteComponent},
  {path: "editarCliente", component:EditClienteComponent},

  {path: "propiedades", component:ListarPropiedadComponent},
  {path: "nuevaPropiedad", component:AddPropiedadComponent},
  {path: "editarPropiedad", component:EditPropiedadComponent},

  {path: "asesores" , component:ListarAsesorComponent},
  {path: "nuevoAsesor" , component:AddAsesorComponent},
  {path: "editarAsesor" , component:EditAsesorComponent},

  {path: "citas" , component:ListarCitaComponent },
  {path: "nuevaCita" , component: AddCitaComponent},
  {path: "editarCita" , component: EditCitaComponent},

  {path: "ventas" , component: ListarVentaComponent},
  {path: "nuevaVenta" , component: AddVentaComponent},
  {path: "editarVenta" , component: EditVentaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
