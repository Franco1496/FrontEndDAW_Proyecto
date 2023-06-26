import { Cliente } from "./Cliente";
import {Propiedad_Asesor} from "./Propiedad_Asesor";

export class Cita {

    id_cita : number;
    id_propiedad_asesor :Propiedad_Asesor;
    id_cliente : Cliente;
    fec_cita : string;
    hora_cita: string;
    fec_creacion: string;
    flag_estado: string;


    constructor(){
        this.id_cita = 0;
        this.id_propiedad_asesor = new Propiedad_Asesor();
        this.id_cliente = new Cliente();
        this.fec_cita = "";
        this.hora_cita ="";
        this.fec_creacion = "";
        this.flag_estado = "";

    }

}