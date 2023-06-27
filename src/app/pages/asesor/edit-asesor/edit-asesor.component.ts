import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asesor } from 'src/app/modelos/Asesor';
import { AsesorService } from 'src/app/servicio/asesor/asesor.service';

@Component({
  selector: 'app-edit-asesor',
  templateUrl: './edit-asesor.component.html',
  styleUrls: ['./edit-asesor.component.css']
})
export class EditAsesorComponent implements OnInit {


  asesor : Asesor = new Asesor();
  constructor( private router:Router, private asesorService:AsesorService) { }

  ngOnInit(): void {
  }

  editar(){
    let id_asesor = JSON.parse(localStorage.getItem('id_asesor') as string);
    this.asesorService.getAsesorId(id_asesor).subscribe(data=>{
      this.asesor=data;
    });
  }

  actualizar( asesor:Asesor){
    this.asesorService.updateAsesor(asesor).subscribe(data=>{
      this.asesor=data;
      this.router.navigate(['asesores']);
    })
  }

}
