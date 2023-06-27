import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../servicio/cargar-scripts.service';
import { SidebarService } from 'src/app/servicio/menu-izquierda.service';

@Component({
  selector: 'app-menu-izquierda',
  templateUrl: './menu-izquierda.component.html',
  styleUrls: ['./menu-izquierda.component.css']
})
export class MenuIzquierdaComponent implements OnInit {

  menuItems: any[];

  constructor(private _CargarScripts: CargarScriptsService, private sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
    console.log(this.menuItems);
  }

  ngOnInit(): void {
    // this._CargarScripts.Carga(["crud/main"])
  }

  toggleSubMenu(item: any): void {
    item.active = !item.active;
  }
}
