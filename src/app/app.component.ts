import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './servicio/cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoDAWII';

constructor( private _CargarScripts: CargarScriptsService){

  //_CargarScripts.Carga(["crud/main"])

}

ngOnInit(): void {
      
  this._CargarScripts.Carga(["crud/main"])

}

}
