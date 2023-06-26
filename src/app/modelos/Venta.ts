import { Cliente } from "./Cliente";
import { Propiedad_Asesor } from "./Propiedad_Asesor";


export class Venta{

    id_venta : number;
    id_propiedad_asesor : Propiedad_Asesor;
    id_cliente : Cliente;
    monto_venta : number;
    fec_creacion : string;
    flag_estado : string;


    constructor(){

        this.id_venta = 0;
        this.id_propiedad_asesor = new Propiedad_Asesor();
        this.id_cliente = new Cliente();
        this.monto_venta = 0;
        this.fec_creacion = "";
        this.flag_estado = "";


    }
}