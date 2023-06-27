import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Inicio',
      icon: 'mdi mdi-gauge',
      url: '/intranet/clientes'
    },
    {
      titulo: 'Mantenimientos',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Clientes', url: '/intranet/clientes' },
        { titulo: 'Propiedades', url: '/intranet/propiedades' },
        { titulo: 'Asesores', url: '/intranet/asesor' },
        { titulo: 'Citas', url: '/intranet/cita' },
        { titulo: 'Ventas', url: '/intranet/venta' },
      ]
    },
    {
      titulo: 'Reportes',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Clientes', url: 'clientes' },
        { titulo: 'Citas', url: 'citas' },
        { titulo: 'Ventas', url: 'ventas' }
      ]
    },
    {
      titulo: 'Cerrar sesión',
      icon: 'mdi mdi-gauge',
      url: ''
    }

  ];

  constructor() { }
}
