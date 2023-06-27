import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asesor } from 'src/app/modelos/Asesor';
import { AsesorService } from 'src/app/servicio/asesor/asesor.service';

@Component({
  selector: 'app-add-asesor',
  templateUrl: './add-asesor.component.html',
  styleUrls: ['./add-asesor.component.css']
})
export class AddAsesorComponent implements OnInit {

  modelAsesor = new Asesor();

  constructor( private router:Router , private asesorService:AsesorService) { }

  ngOnInit(): void {
  }

  guardar(asesor:Asesor){

    this.asesorService.createAsesor(asesor).subscribe( data=>{
      this.router.navigate(['asesores']);
    })
  }

}
