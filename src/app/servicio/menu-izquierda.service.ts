import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Inicio',
      icon: 'mdi mdi-gauge'
    },
    {
      titulo: 'Mantenimientos',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Clientes', url: '/clientes' },
        { titulo: 'Propiedades', url: '/propiedades' },
        { titulo: 'Asesores', url: '/asesor' },
        { titulo: 'Citas', url: '/cita' },
        { titulo: 'Ventas', url: '/venta' },
      ]
    },
    {
      titulo: 'Reportes',
      icon: 'mdi mdi-gauge',
      submenu: [

        { titulo: 'Clientes', url: 'http://localhost:4200/api/reporte/cliente'  },
        { titulo: 'Citas', url: 'citas' },
        { titulo: 'Ventas', url: 'ventas' }
      ]
    },
    {
      titulo: 'Cerrar sesión',
      icon: 'mdi mdi-gauge',
    }

  ];

  constructor() { }
}
