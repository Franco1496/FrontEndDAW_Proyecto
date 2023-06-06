import { Ubigeo } from "./Ubigeo";

export class Cliente{
    id_cliente: number;
    documento: string;
    nom_cliente: string;
    ape_cliente: string;
    dir_cliente: string;

    id_ubigeo: Ubigeo;

    tel_cliente: string;
    correo_cliente: string;


    constructor(){
        this.id_cliente=0;
        this.documento="";
        this.nom_cliente="";
        this.ape_cliente="";
        this.dir_cliente="";
        this.id_ubigeo= new Ubigeo();
        this.tel_cliente="";
        this.correo_cliente="";
  
    }
}