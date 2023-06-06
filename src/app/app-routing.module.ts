import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarPropiedadComponent } from './componentes/propiedad/listar-propiedad/listar-propiedad.component';
import { AddPropiedadComponent } from './componentes/propiedad/add-propiedad/add-propiedad.component';
import { EditPropiedadComponent } from './componentes/propiedad/edit-propiedad/edit-propiedad.component';

const routes: Routes = [
  {path: "clientes", component:ListarClienteComponent},
  {path: "nuevoCliente", component:AddClienteComponent},
  {path: "editarCliente", component:EditClienteComponent},

  {path: "propiedades", component:ListarPropiedadComponent},
  {path: "nuevaPropiedad", component:AddPropiedadComponent},
  {path: "editarPropiedad", component:EditPropiedadComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
